"use client";

// External deps
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Internal deps
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginService } from "@/api/auth/services";
import { setToken } from "@/lib/serverActions";
import { ROUTES } from "@/lib/constants";
import { Icons } from "@/components/ui/icons";

const schema = z.object({
  email: z
    .string({ required_error: "El email es requerido" })
    .email({ message: "Ingresa un email valido" }),
  password: z
    .string({ required_error: "La contraseña es requerida" })
    .min(5, { message: "La contraseña debe tener al menos 5 caracteres" }),
  remember: z.boolean({}).default(false).optional(),
});

type FormFields = z.infer<typeof schema>;

function LoginForm() {
  const form = useForm<FormFields>({ resolver: zodResolver(schema) });
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = form;
  const router = useRouter();

  const onSubmit: SubmitHandler<FormFields> = async (values) => {
    try {
      const response = await loginService({
        email: values.email,
        password: values.password,
      });

      if (!response.success) {
        throw new Error(response.message);
      }

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

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col justify-between"
      >
        <div className="grid gap-6">
          {/* Email */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu email"
                    className="py-4 drop-shadow-2xl focus-visible:ring-1 focus-visible:ring-accent"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className="py-4 drop-shadow-2xl focus-visible:ring-1 focus-visible:ring-accent"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remember me */}
          <FormField
            control={control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    id="remember"
                    className="border-checkboxInactive bg-checkboxInactive data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
                    onCheckedChange={field.onChange}
                    checked={field.value}
                  />
                </FormControl>
                <FormLabel className="!mt-0 text-sm font-medium text-muted-foreground">
                  Recordarme
                </FormLabel>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col">
          {errors.root && (
            <span className="mb-1 text-sm font-medium text-destructive">{errors.root.message}</span>
          )}
          <Button
            type="submit"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Icons.loader size={24} className="mr-2 animate-spin" /> : "Ingresar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default LoginForm;
