"use client";

// External deps
import type { UseFormReturn } from "react-hook-form";

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
import { Icons } from "@/components/ui/icons";
import type { LoginFormFields } from "@/containers/auth/LoginContainer/LoginContainer";

interface Props {
  form: UseFormReturn<LoginFormFields>;
  onSubmit: () => void;
}

function LoginForm({ form, onSubmit }: Readonly<Props>) {
  const {
    control,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex h-full w-full flex-col justify-between">
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
            {isSubmitting ? <Icons.Loader size={24} className="mr-2 animate-spin" /> : "Ingresar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default LoginForm;
