// External deps
import React from "react";

// Internal deps
import BottomBar from "@/components/layout/BottomBar";

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Readonly<Props>) {
  return (
    <main className="flex h-dvh max-h-dvh w-full flex-col items-center justify-between">
      {children}
      <BottomBar />
    </main>
  );
}

export default MainLayout;
