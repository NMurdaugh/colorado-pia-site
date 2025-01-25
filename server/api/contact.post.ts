import { getContactFormSchema } from "~/schemas/contactForm";

const contactSchema = getContactFormSchema({
  name: "Name is required",
  email: "Invalid email address",
  phone: "Invalid phone number",
  message: "Message is required",
});

export default defineEventHandler(async (event: any) => {
  try {
    const body = await readBody(event);

    // Validate with Zod schema
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return {
        statusCode: 400,
        body: {
          success: false,
          message: "Validation failed",
          errors: result.error.errors,
        },
      };
    }

    const validatedData = result.data;

    // Here you can add your logic to handle the form data
    // For example, sending an email, storing in a database, etc.

    // For now, we'll just return a success response
    return {
      statusCode: 200,
      body: {
        success: true,
        message: "Form submission received successfully",
      },
    };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return {
      statusCode: 500,
      body: {
        success: false,
        message: "An error occurred while processing your request",
      },
    };
  }
});
