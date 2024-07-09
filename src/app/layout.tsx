// External deps
import type { Metadata } from "next";
import { poppins } from "./fonts";

// Internal deps
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "PaisaBank",
  description: "Encontrá todas tus cuentas en un solo lugar",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(poppins.className, "mx-auto h-dvh max-h-dvh max-w-lg overflow-y-hidden")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
