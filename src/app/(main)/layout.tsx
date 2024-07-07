// External deps
import React from "react";

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Readonly<Props>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
  );
}

export default MainLayout;
