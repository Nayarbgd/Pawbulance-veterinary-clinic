import { ReactNode } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col dark bg-background text-foreground font-sans selection:bg-primary/30">
      <Navigation />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}