import { z } from "zod";

export const getContactFormSchema = (errors: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  return z.object({
    name: z.string({ message: errors.name }).min(1, { message: errors.name }),
    email: z
      .string({ message: errors.email })
      .email({ message: errors.email })
      .min(1, { message: errors.email }),
    phone: z
      .string({ message: errors.phone })
      .regex(/^(\+?1)?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/, {
        message: errors.phone,
      })
      .min(1, { message: errors.phone }),
    message: z
      .string({ message: errors.message })
      .min(1, { message: errors.message }),
  });
};

export type ContactFormSchema = z.infer<ReturnType<typeof getContactFormSchema>>;
