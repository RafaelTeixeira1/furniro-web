import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Esquema de validação para o campo de e-mail
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor, insira um email.")
    .email("Formato de email inválido."),
});

// Hook reutilizável para formulários de e-mail
export function useEmailForm() {
  return useForm({
    resolver: yupResolver(schema),
  });
}
