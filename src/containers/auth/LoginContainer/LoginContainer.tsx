"use client";

// External deps
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Internal deps
import LoginForm from "@/components/auth/LoginForm/LoginForm";
import { loginService } from "@/api/auth/services";
import { setToken } from "@/lib/serverActions";
import { ROUTES } from "@/lib/constants";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  email: z
    .string({ required_error: "El email es requerido" })
    .email({ message: "Ingresa un email valido" }),
  password: z
    .string({ required_error: "La contraseña es requerida" })
    .min(5, { message: "La contraseña debe tener al menos 5 caracteres" }),
  remember: z.boolean({}).default(false).optional(),
});

export type LoginFormFields = z.infer<typeof schema>;

function LoginContainer() {
  const form = useForm<LoginFormFields>({ resolver: zodResolver(schema) });
  const { handleSubmit, setError, setValue } = form;
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // Get email from localStorage on load
    const email = localStorage.getItem("email");

    if (email) {
      setValue("email", JSON.parse(email));
      setValue("remember", true);
    }
  }, []);

  const onSubmit: SubmitHandler<LoginFormFields> = async (values) => {
    try {
      const response = await loginService({
        email: values.email,
        password: values.password,
      });

      if (!response.success) {
        throw new Error(response.message);
      }

      if (values.remember) {
        localStorage.setItem("email", JSON.stringify(values.email));
      } else {
        localStorage.removeItem("email");
      }

      toast({
        variant: "success",
        description: "Login exitoso",
      });

      setToken(response.data.token);

      router.push(ROUTES.HOME.path);
    } catch (error: any) {
      console.error(error);
      if (error.message.includes("500")) {
        setError("root", {
          message: "Algo salió mal. Inténtalo nuevamente.",
        });
      } else {
        setError("root", {
          message: "Parece que alguno de tus datos es incorrecto.",
        });
      }
    }
  };

  return <LoginForm form={form} onSubmit={handleSubmit(onSubmit)} />;
}

export default LoginContainer;
