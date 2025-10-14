import { FaTiktok } from "react-icons/fa";
import {
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Waves,
  Youtube,
} from "lucide-react";

import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  LOCATION_ADDRESS,
  OPERATING_HOURS,
  WHATSAPP_LINK,
} from "@/constants/contact";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/anyer_watersports",
    Icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@anyer_watersports",
    Icon: FaTiktok,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@pantaiwave",
    Icon: Youtube,
  },
];

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-sky-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_55%)]" />
      <div className="relative container grid gap-12 py-16 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-2xl font-semibold">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg shadow-secondary/40">
              <Waves className="h-6 w-6" />
            </span>
            Anyerwatersports
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-white/80">
            Nikmati liburan tropis di pantai dengan armada wahana terbaik kami.
            Dari jetski hingga ATV, semua peralatan terawat dan siap menemani
            petualangan Anda sepanjang hari.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Hubungi Kami
            <PhoneCall className="h-4 w-4" />
          </a>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Kontak</h3>
          <div className="space-y-3 text-sm text-white/80">
            <p className="flex items-start gap-3">
              <PhoneCall className="mt-0.5 h-4 w-4 text-secondary" />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-secondary" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
              <span>{LOCATION_ADDRESS}</span>
            </p>
            <p className="flex items-start gap-3">
              <Waves className="mt-0.5 h-4 w-4 text-secondary" />
              <span>{OPERATING_HOURS}</span>
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ikuti Kami</h3>
          <div className="flex gap-3">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container py-6 text-center text-xs text-white/60">
          © {currentYear} Anyerwatersports. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
