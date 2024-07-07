"use client";

// Internal deps
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

function LoginForm() {
  return (
    <form className="flex h-full w-full flex-col justify-between">
      <div className="grid gap-6">
        <div className="grid gap-4">
          <Label htmlFor="email" className="text-base font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Ingresa tu email"
            className="py-4 drop-shadow-2xl focus-visible:ring-1 focus-visible:ring-accent"
          />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="password" className="text-base font-medium">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            className="py-4 drop-shadow-2xl focus-visible:ring-1 focus-visible:ring-accent"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            className="border-checkboxInactive bg-checkboxInactive data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
          />
          <Label htmlFor="remember" className="text-sm font-medium text-muted-foreground">
            Recordarme
          </Label>
        </div>
      </div>
      <Button type="submit" className="bg-accent text-accent-foreground">
        Ingresar
      </Button>
    </form>
  );
}

export default LoginForm;
