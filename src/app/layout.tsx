// External deps
import type { Metadata } from "next";
import { poppins } from "./fonts";

// Internal deps
import { Toaster } from "@/components/ui/toaster";
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
      <body className={poppins.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
