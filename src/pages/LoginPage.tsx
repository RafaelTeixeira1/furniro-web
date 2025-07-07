import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ShopBar from "../components/common/ShopBar";
import StoreAdvantages from "../components/common/StoreAdvantages";

type FormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log("User logged in:", data);
    // Aqui depois faremos a autenticação real e salvar no contexto.
    navigate("/"); // Redireciona após login
  };

  const breadcrumb = ["Home", "Login"];

  return (
    <div className="flex flex-col min-h-screen">
      <ShopBar breadcrumb={breadcrumb} />

      <main className="flex flex-col items-center justify-center flex-1 py-12 px-4">
        <h2 className="text-[36px] font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
          <label className="text-[16px] font-medium mb-[28px]">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email é obrigatório" })}
            className="border p-3 rounded-[10px] w-[453px] h-[75px] mb-[41px]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
          )}

          <label className="text-[16px] font-medium mb-[28px]">Password</label>
          <input
            type="password"
            {...register("password", { required: "Senha é obrigatória" })}
            className="border p-3 rounded-[10px] w-[453px] h-[75px] mb-[41px]"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="border py-3 px-6 rounded hover:bg-gray-100 transition w-full"
          >
            Login
          </button>

          <p
            onClick={() => navigate("/register")}
            className="mt-4 text-sm text-blue-600 cursor-pointer hover:underline"
          >
            Ainda não tem conta? Registre-se
          </p>
        </form>
      </main>

      <StoreAdvantages />
    </div>
  );
};

export default LoginPage;
