import { PropsWithChildren } from "react";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { cn } from "@/lib/utils";

interface SiteLayoutProps extends PropsWithChildren {
  className?: string;
}

const SiteLayout = ({ children, className }: SiteLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-100/60 via-white to-white text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-[-240px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_62%)]" />
      <SiteHeader />
      <main className={cn("relative z-10", className)}>{children}</main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
