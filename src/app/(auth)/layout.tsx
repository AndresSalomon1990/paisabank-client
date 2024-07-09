// External deps
import React from "react";
import Image from "next/image";

// Internal deps
import PaisaBankLogo from "@/assets/icons/paisabank-logo.svg?url";

interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Readonly<Props>) {
  return (
    <main className="justify-betweeen flex h-dvh max-h-dvh w-screen flex-col items-center px-6 pb-9">
      <div className="mb-10 mt-32 flex flex-col items-center justify-center text-center">
        <Image src={PaisaBankLogo} alt="logo" width={49} height={49} />
        <h1 className="text-4xl font-medium text-accent">PaisaBank</h1>
        <h4 className="text-subtitle-foreground">Comienza a manejar tu vida financiera</h4>
      </div>
      {children}
    </main>
  );
}

export default AuthLayout;
