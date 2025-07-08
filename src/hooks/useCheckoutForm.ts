import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import axios from "axios";

const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  companyName: z.string().optional(),
  zipCode: z.string().min(8, "ZIP code must be 8 digits."),
  country: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  province: z.string().optional(),
  addonAddress: z.string().optional(),
  email: z.string().email("Valid email is required."),
  additionalInfo: z.string().optional(),
  paymentMethod: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

export function useCheckoutForm() {
  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      zipCode: "",
      country: "",
      street: "",
      city: "",
      province: "",
      addonAddress: "",
      email: "",
      additionalInfo: "",
      paymentMethod: "bank1",
    },
  });

  const zipCode = form.watch("zipCode");

  useEffect(() => {
    const fetchAddress = async () => {
      if (zipCode && zipCode.replace(/\D/g, "").length === 8) {
        try {
          const { data } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
          if (!data.erro) {
            form.setValue("country", "Brasil");
            form.setValue("street", data.logradouro);
            form.setValue("city", data.localidade);
            form.setValue("province", data.uf);
          }
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
      }
    };
    fetchAddress();
  }, [zipCode, form]);

  return form;
}
