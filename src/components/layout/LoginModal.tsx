import React from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

type Props = {
  onClose: () => void;
};

type FormData = {
  email: string;
  password: string;
};

const LoginModal: React.FC<Props> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Login realizado:", data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <X size={24} />
        </button>
        <h2 className="text-[36px] font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="text-[16px] font-medium mb-[28px]">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email é obrigatório" })}
            className="border p-3 rounded-[10px] w-full h-[75px] mb-[41px]"
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

          <label className="text-[16px] font-medium mb-[28px]">Password</label>
          <input
            type="password"
            {...register("password", { required: "Senha é obrigatória" })}
            className="border p-3 rounded-[10px] w-full h-[75px] mb-[41px]"
          />
          {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

          <button
            type="submit"
            className="border py-3 rounded hover:bg-gray-100 transition w-full"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-blue-600 text-center cursor-pointer hover:underline">
            Ainda não tem conta? Registre-se
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
