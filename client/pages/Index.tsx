import type { FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Banana,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Wallet,
} from "lucide-react";

import SiteLayout from "@/components/layout/SiteLayout";
import { CONTACT_PHONE_DISPLAY, WHATSAPP_LINK } from "@/constants/contact";
import { cn } from "@/lib/utils";
import jetski from "../img/jetski.jpg";
import sahrul from "../img/sahrul.png";
import banana from "../img/banana.jpg";
import atv from "../img/atv.jpg";
import sofaboat from "../img/donatboat.jpg";
import parasailing from "../img/parasailing.jpg";

type Wahana = {
  name: string;
  description: string;
  price: number;
  image: string;
  highlight: string;
};

type Feature = {
  title: string;
  description: string;
  Icon: typeof Wallet;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
};

const wahanaList: Wahana[] = [
  {
    name: "Jetski",
    description:
      "Rasakan adrenalin menembus ombak dengan jetski bertenaga tinggi dan instruktur profesional siap mendampingi.",
    highlight: "Instruktur siap mendampingi",
    price: 200000,
    image: jetski,
  },
  {
    name: "Banana Boat",
    description:
      "Ajak keluarga dan sahabat menikmati tawa seru dengan banana boat yang aman dan stabil di setiap tarikan.",
    highlight: "Cocok untuk rombongan",
    price:180000,
    image: banana,
  },
  {
    name: "ATV",
    description:
      "Jelajahi pesisir pantai dan jalur pasir menggunakan ATV premium dengan rute seru penuh tantangan.",
    highlight: "Termasuk briefing keselamatan",
    price: 60000,
    image: atv,
  },
  {
    name: "Donat Boat",
    description:
      "Sensasi terbang rendah di atas permukaan air dengan donat boat yang nyaman untuk segala usia",
    highlight: "Peralatan berkualitas ",
    price: 180000,
    image: sofaboat,
  },
  {
    name: "Parasailing",
    description:
      "Nikmati panorama pantai dari ketinggian dengan parasailing aman dan harness standar internasional.",
    highlight: "Panorama 360°",
    price: 260000,
    image: parasailing,
  },
];

const features: Feature[] = [
  {
    title: "Harga Terjangkau",
    description:
      "Paket hemat dengan promo musiman untuk semua jenis wahana favorit.",
    Icon: Wallet,
  },
  {
    title: "Instruktur Profesional",
    description:
      "Tim bersertifikat siap menemani dan memastikan pengalaman aman dan nyaman.",
    Icon: UserCheck,
  },
  {
    title: "Peralatan Terjamin Aman",
    description:
      "Kualitas peralatan terbaik dengan pengecekan harian dan standar internasional.",
    Icon: ShieldCheck,
  },
  {
    title: "Booking Mudah",
    description:
      "Reservasi instan via WhatsApp, jadwal fleksibel, dan konfirmasi cepat.",
    Icon: CalendarCheck,
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Rani Pratiwi",
    role: "Travel Blogger",
    rating: 5,
    quote:
      "Semua kru sangat ramah dan profesional. Jetski-nya kencang dan aman, pengalaman liburan terbaik di Bali!",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Andika Saputra",
    role: "Event Organizer",
    rating: 5,
    quote:
      "Kami membawa rombongan kantor dan semua wahana terkoordinasi rapi. Banana boat-nya bikin nagih!",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nadya Kusuma",
    role: "Family Traveler",
    rating: 5,
    quote:
      "Booking super mudah, tinggal chat WhatsApp langsung dapat jadwal. Anak-anak senang naik donat boat!",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sahrul Fauzi",
    role: "Pengusaha Muda",
    rating: 5,
    quote:
      "ATV-nya luar biasa, rutenya menantang tapi tetap aman. Instruktur sangat membantu dan profesional.",
    image: sahrul,
  },
];

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-24 pt-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Pantai tropis dengan air biru jernih"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/35 to-slate-900/10" />
      </div>
      <div className="relative z-10">
        <div className="container flex flex-col items-center gap-12 py-24 text-center md:items-start md:text-left lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-28">
          <div className="mx-auto max-w-2xl space-y-8 text-white text-balance md:mx-0 md:text-left lg:space-y-10">
            <Reveal className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium text-white/90 shadow-lg shadow-sky-900/30 backdrop-blur md:mx-0">
              <Sparkles className="h-4 w-4 text-secondary" />
              Wahana laut terlengkap di Anyer
            </Reveal>
            <Reveal className="space-y-6 text-balance" delay={100}>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Sewa Wahana Pantai Seru &amp; Terjangkau
              </h1>
              <p className="text-lg text-white/90 sm:text-xl">
                Nikmati liburan seru di pantai dengan wahana favorit Anda –
                Jetski, Banana Boat, ATV, dan banyak lagi! Armada lengkap,
                instruktur profesional, dan pemesanan super mudah.
              </p>
            </Reveal>
            <Reveal
              className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
              delay={180}
            >
              <a
                href="#booking"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-secondary px-8 py-3 text-base font-semibold text-secondary-foreground shadow-xl shadow-yellow-400/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
              >
                Pesan Sekarang
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#wahana"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition duration-200 hover:bg-white/15 sm:w-auto"
              >
                Lihat Daftar Wahana
              </a>
            </Reveal>
            <Reveal
              delay={260}
              className="grid w-full gap-6 sm:grid-cols-2 sm:gap-5 md:grid-cols-3"
            >
              {[
                { label: "Pilihan Wahana", value: "15+" },
                { label: "Happy Traveler", value: "1.200+" },
                { label: "Rating Kepuasan", value: "4.9/5" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center shadow-lg shadow-sky-900/20 backdrop-blur sm:text-left md:text-center"
                >
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal
            animation="animate-fade-in-right"
            delay={120}
            className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/10 shadow-2xl shadow-sky-900/40 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1505867798796-639ec7e8cdf5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                alt="Wisatawan menikmati jetski di pantai"
                className="h-full w-full rounded-[40px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 rounded-3xl bg-white/80 p-4 text-slate-900 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Pendamping Profesional</span>
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span>4.9</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Gratis briefing keselamatan, pelampung premium, dan
                  dokumentasi foto saat aktivitas berlangsung.
                </p>
                <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-primary/90 to-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
                  <span>Hubungi Tim Anyerwatersports</span>
                  {/* <span>{CONTACT_PHONE_DISPLAY}</span> */}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) => {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-2xl space-y-4",
        align === "left" ? "text-left" : "text-center",
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-base text-foreground/70 sm:text-lg">{description}</p>
    </Reveal>
  );
};

const WahanaGrid = () => {
  return (
    <section id="wahana" className="relative scroll-mt-24 py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-secondary/20 via-transparent to-transparent" />
      <div className="container max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Daftar Wahana"
          title="Pilihan Wahana Favorit untuk Semua Petualangan"
          description="Pilih wahana sesuai karakter liburan Anda. Semua paket termasuk perlengkapan keselamatan, briefing singkat, dan dokumentasi foto."
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {wahanaList.map((wahana, index) => (
            <Reveal key={wahana.name} delay={index * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-primary/15 bg-white/95 shadow-lg shadow-primary/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden sm:h-60">
                  <img
                    src={wahana.image}
                    alt={wahana.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {wahana.highlight}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 p-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {wahana.name}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {wahana.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                        Mulai dari
                      </p>
                      <p className="text-xl font-semibold text-primary">
                        {currencyFormatter.format(wahana.price)} / 3x Putaran
                      </p>
                    </div>
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition duration-200 hover:bg-primary hover:text-primary-foreground"
                    >
                      Pesan
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section id="keunggulan" className="scroll-mt-24 py-24 lg:py-28">
      <div className="container max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Mengapa Memilih Kami"
          title="Keamanan dan Kenyamanan Jadi Prioritas Utama"
          description="PantaiWave memastikan setiap pengalaman bermain air penuh keseruan tanpa mengorbankan aspek keselamatan dan kenyamanan Anda."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 90}>
              <div className="group flex h-full flex-col gap-4 rounded-[26px] border border-primary/10 bg-white/95 p-6 shadow-lg shadow-primary/5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm text-foreground/70">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimoni" className="scroll-mt-24 py-24 lg:py-28">
      <div className="container max-w-5xl space-y-12">
        <SectionHeading
          eyebrow="Testimoni Pelanggan"
          title="Apa Kata Mereka Tentang Anyerwatersports"
          description="Ulasan tulus dari pelanggan yang merasakan langsung serunya bermain wahana pantai bersama kami."
        />
        <Reveal className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary/90 via-primary to-primary/80 p-1 shadow-2xl">
          <div className="grid gap-10 rounded-[30px] bg-white/95 p-8 shadow-inner md:grid-cols-[1.3fr_0.9fr] md:items-center lg:p-10">
            <div className="space-y-6 text-balance">
              <Quote className="h-10 w-10 text-primary" />
              <p className="text-xl font-medium text-foreground/80 sm:text-2xl sm:text-balance">
                “{activeTestimonial.quote}”
              </p>
              <div className="flex flex-col gap-1 text-sm text-foreground/60">
                <span className="text-lg font-semibold text-foreground">
                  {activeTestimonial.name}
                </span>
                <span>{activeTestimonial.role}</span>
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: activeTestimonial.rating }).map(
                    (_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-6">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/30 shadow-lg sm:h-36 sm:w-36">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-end">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition hover:bg-primary hover:text-primary-foreground"
                  aria-label="Testimonial sebelumnya"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition hover:bg-primary hover:text-primary-foreground"
                  aria-label="Testimonial berikutnya"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="flex gap-2 justify-center md:justify-end">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "h-2.5 w-7 rounded-full transition-all",
                      activeIndex === index
                        ? "bg-primary"
                        : "bg-primary/25 hover:bg-primary/50",
                    )}
                    aria-label={`Pilih testimoni ${testimonial.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const BookingFormSection = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const wahana = formData.get("wahana") as string;
    const date = formData.get("date") as string;
    const people = formData.get("people") as string;

    if (!name || !phone || !wahana || !date || !people) {
      window.alert(
        "Mohon lengkapi seluruh data pemesanan sebelum mengirimkan formulir.",
      );
      return;
    }

    const message = [
      "Halo Anyerwatersports!",
      "",
      "Saya ingin melakukan pemesanan wahana pantai:",
      `- Nama: ${name}`,
      `- Kontak: ${phone}`,
      `- Wahana: ${wahana}`,
      `- Tanggal: ${date}`,
      `- Jumlah Orang: ${people}`,
      "",
      "Mohon konfirmasi ketersediaannya ya!",
    ].join("\n");
    const whatsAppUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;

    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
    form.reset();
  };

  const inputClassName =
    "w-full rounded-2xl border border-primary/20 bg-white/95 px-5 py-3 text-base text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <section id="booking" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-100/60 via-white to-transparent" />
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          eyebrow="Formulir Pemesanan"
          title="Pesan Wahana Favorit Anda Sekarang"
          description="Isi data berikut dan kami akan memproses pemesanan Anda melalui WhatsApp dalam hitungan menit. Jadwal fleksibel dan bisa disesuaikan."
          align="left"
        />
        <Reveal
          delay={120}
          className="flex flex-col justify-between gap-6 rounded-[30px] border border-primary/10 bg-white/90 p-10 shadow-xl shadow-primary/10"
        >
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-foreground"
              >
                Nama Lengkap
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nama sesuai identitas"
                required
                className={inputClassName}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-foreground"
              >
                Nomor WA / Telepon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Contoh: 0812-3456-7890"
                required
                className={inputClassName}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="wahana"
                className="text-sm font-semibold text-foreground"
              >
                Pilihan Wahana
              </label>
              <select
                id="wahana"
                name="wahana"
                required
                className={cn(inputClassName, "appearance-none")}
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih salah satu wahana
                </option>
                {wahanaList.map((wahana) => (
                  <option key={wahana.name} value={wahana.name}>
                    {wahana.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
              <div className="grid gap-2">
                <label
                  htmlFor="date"
                  className="text-sm font-semibold text-foreground"
                >
                  Tanggal
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className={inputClassName}
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="people"
                  className="text-sm font-semibold text-foreground"
                >
                  Jumlah Orang
                </label>
                <input
                  id="people"
                  name="people"
                  type="number"
                  min="1"
                  placeholder="Jumlah peserta"
                  required
                  className={inputClassName}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Kirim Pemesanan via WhatsApp
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-sm text-foreground/60">
              Dengan mengirimkan formulir ini, Anda akan diarahkan ke WhatsApp
              untuk konfirmasi pemesanan langsung dengan tim kami.
            </p>
          </form>
          <div className="rounded-2xl bg-primary/10 p-6 text-sm text-primary">
            <p className="font-semibold">Perlu bantuan lebih lanjut?</p>
            <p className="mt-2 text-primary/80">
              Tim reservasi kami siap membantu memilih paket terbaik sesuai
              kebutuhan Anda.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="pb-24">
      <div className="container">
        <Reveal className="overflow-hidden rounded-[36px] bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-[1px] shadow-2xl">
          <div className="grid gap-10 rounded-[34px] bg-white/95 p-10 text-center md:grid-cols-[2fr_1fr] md:text-left">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Siap bermain di pantai?
              </p>
              <h3 className="text-3xl font-bold text-foreground sm:text-4xl">
                Jadwalkan petualangan pantai Anda bersama Anyerwatersports
              </h3>
              <p className="text-base text-foreground/70">
                Pilih wahana favorit, atur jadwal, dan dapatkan dokumentasi
                gratis untuk abadikan momen terbaik Anda.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-secondary px-8 py-3 text-base font-semibold text-secondary-foreground shadow-lg shadow-yellow-400/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Hubungi via WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="text-sm text-foreground/60">
                Respon cepat &lt; 5 menit.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

interface RevealProps {
  children: ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}

const Reveal = ({
  children,
  animation = "animate-fade-in-up",
  delay = 0,
  className,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      element.classList.remove("opacity-0", "translate-y-6");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.animationDelay = `${delay}ms`;
            element.classList.add(animation);
            element.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay]);

  return (
    <div
      ref={ref}
      className={cn("opacity-0 translate-y-6 will-change-transform", className)}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <WahanaGrid />
      <FeaturesSection />
      <TestimonialCarousel />
      <BookingFormSection />
      <CallToAction />
    </SiteLayout>
  );
};

export default Index;
