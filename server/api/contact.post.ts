interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default defineEventHandler(async (event: any) => {
  try {
    const body = await readBody<ContactForm>(event);

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return {
        statusCode: 400,
        body: {
          success: false,
          message: "All fields are required",
        },
      };
    }

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
