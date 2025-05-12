import { z } from 'zod';

const verifySchema = z.object({
  token: z.string().min(1, { message: 'Turnstile token is required' }),
  remoteip: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  
  try {
    // Validate the request body
    const { token, remoteip } = verifySchema.parse(body);
    
    // Prepare form data for Cloudflare verification
    const formData = new FormData();
    formData.append('secret', config.TURNSTILE_SECRET_KEY);
    formData.append('response', token);
    
    if (remoteip) {
      formData.append('remoteip', remoteip);
    }
    
    // Send verification request to Cloudflare
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });
    
    const result = await response.json();
    
    if (!result.success) {
      return {
        success: false,
        error: result['error-codes'] || 'Turnstile verification failed',
      };
    }
    
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors,
      };
    }
    
    return {
      success: false,
      error: 'Failed to verify Turnstile token',
    };
  }
});