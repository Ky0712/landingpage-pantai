import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, Sunrise, Waves, X } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, WHATSAPP_LINK } from "@/constants/contact";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Beranda", href: "#hero" },
  { label: "Wahana", href: "#wahana" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Pemesanan", href: "#booking" },
<<<<<<< HEAD
  { label: "List Harga", href : "/price-list" },
=======
>>>>>>> da02872 (Initial commit)
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavigate = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-md shadow-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link
          to="/"
          className="group relative inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-primary"
          onClick={handleNavigate}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg shadow-secondary/40 transition group-hover:scale-105">
            <Waves className="h-5 w-5" />
          </span>
          <div className="flex flex-col leading-tight">
            <span>Anyer</span>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary/60">
              Watersports
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigate}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-xs font-medium text-foreground/60">
            <Sunrise className="h-4 w-4 text-primary" />
            <span>{CONTACT_PHONE_DISPLAY}</span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Pesan via WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-white/80 text-primary shadow-sm transition-colors duration-200 hover:bg-primary/10 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={cn(
          "md:hidden border-t border-white/60 bg-white/90 backdrop-blur transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/95",
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="container flex flex-col gap-4 py-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigate}
              className="text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavigate}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40"
          >
            Pesan via WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
  