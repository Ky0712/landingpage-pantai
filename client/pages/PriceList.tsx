import { ArrowLeft, ArrowRight, Check, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/constants/contact";

const priceData = [
  {
    category: "Daftar Wahana Anyerwatersports",
    items: [
      { name: "Jetski", price: "Rp 200.000", duration: "3x Putaran", capacity: "1-2 orang" },
      { name: "Banana Boat", price: "Rp 180.000", duration: "3x Putaran", capacity: "5 orang" },
      { name: "ATV", price: "Rp 60.000", duration: "3x Putaran", capacity: "2 orang" },
      { name: "Donat Boat", price: "Rp 180.000", duration: "3x Putaran", capacity: "4 orang" },
      { name: "Parasailing", price: "Rp 260.000", duration: "3x Putaran", capacity: "1 orang" },
    ]
  },
  // {
  //   category: "Banana Boat",
  //   items: [
  //     { name: "Banana Boat Single Ride", price: "Rp 75.000", duration: "15 menit", capacity: "Per orang" },
  //     { name: "Banana Boat Group (5 orang)", price: "Rp 350.000", duration: "15 menit", capacity: "5 orang" },
  //     { name: "Banana Boat Group (10 orang)", price: "Rp 650.000", duration: "15 menit", capacity: "10 orang" },
  //   ]
  // },
  // {
  //   category: "ATV",
  //   items: [
  //     { name: "ATV 30 Menit", price: "Rp 200.000", duration: "30 menit", capacity: "1 orang" },
  //     { name: "ATV 1 Jam", price: "Rp 350.000", duration: "60 menit", capacity: "1 orang" },
  //     { name: "ATV 2 Jam", price: "Rp 600.000", duration: "120 menit", capacity: "1 orang" },
  //   ]
  // },
  // {
  //   category: "Parasailing",
  //   items: [
  //     { name: "Parasailing Single", price: "Rp 300.000", duration: "10 menit", capacity: "1 orang" },
  //     { name: "Parasailing Tandem", price: "Rp 550.000", duration: "10 menit", capacity: "2 orang" },
  //   ]
  // },
  // {
  //   category: "Donat Boat",
  //   items: [
  //     { name: "Flying Fish (3 orang)", price: "Rp 250.000", duration: "15 menit", capacity: "3 orang" },
  //     { name: "Flying Fish (5 orang)", price: "Rp 400.000", duration: "15 menit", capacity: "5 orang" },
  //   ]
  // },
  // {
  //   category: "Snorkeling",
  //   items: [
  //     { name: "Snorkeling Package", price: "Rp 150.000", duration: "1 jam", capacity: "Per orang", includes: ["Peralatan lengkap", "Pemandu", "Life jacket"] },
  //     { name: "Snorkeling + Banana Boat", price: "Rp 200.000", duration: "1.5 jam", capacity: "Per orang", includes: ["Peralatan lengkap", "Pemandu", "Life jacket", "1x Banana boat"] },
  //   ]
  // },
];

const packageDeals = [
  {
    name: "Paket Family Fun",
    price: "Rp 1.500.000",
    items: ["2x Jetski 30 menit", "1x Banana Boat (5 orang)", "4 ATV"],
    capacity: "4-5 orang",
    popular: true
  },
  {
    name: "Paket Extreme Adventure",
    price: "Rp 2.000.000",
    items: ["2x Jetski 1 jam", "1x Parasailing", "2x ATV 1 jam", "1x Flying Fish"],
    capacity: "2-3 orang",
    popular: false
  },
  {
    name: "Paket Group Party",
    price: "Rp 3.500.000",
    items: ["3x Jetski 30 menit", "2x Banana Boat (10 orang)", "10x Snorkeling", "2x Flying Fish"],
    capacity: "10-15 orang",
    popular: false
  },
];

const PriceList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/95 to-primary pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container relative">
          <div className="mb-6">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/30 hover:-translate-x-1"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Kembali ke Beranda
            </Link>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              <Waves className="h-4 w-4" />
              Daftar Harga Lengkap
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Harga Wahana Watersports
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Pilih wahana favorit Anda dengan harga yang kompetitif dan transparan
            </p>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:gap-12">
            {priceData.map((category, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 md:p-8"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
                  {category.category}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-1"
                    >
                      <h3 className="mb-2 text-lg font-semibold text-slate-900">
                        {item.name}
                      </h3>
                      <div className="mb-4 text-2xl font-bold text-primary">
                        {item.price}
                      </div>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Durasi: {item.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Kapasitas: {item.capacity}</span>
                        </div>
                        {item.includes && item.includes.map((inc, incIdx) => (
                          <div key={incIdx} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Paket Hemat
            </h2>
            <p className="text-lg text-slate-600">
              Dapatkan harga lebih hemat dengan paket bundling kami
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packageDeals.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-2xl border-2 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${pkg.popular ? 'border-primary scale-105' : 'border-slate-200'}`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    Paling Populer
                  </div>
                )}
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {pkg.name}
                </h3>
                <div className="mb-4 text-3xl font-bold text-primary">
                  {pkg.price}
                </div>
                <div className="mb-4 text-sm text-slate-600">
                  Untuk {pkg.capacity}
                </div>
                <div className="mb-6 space-y-2">
                  {pkg.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Pesan Paket Ini
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Syarat & Ketentuan
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Harga sudah termasuk peralatan keselamatan lengkap (life jacket, helm untuk ATV)</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Instruktur profesional dan berpengalaman akan mendampingi setiap wahana</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Pemesanan minimal H-1 untuk memastikan ketersediaan</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Harga dapat berubah sewaktu-waktu, terutama saat high season</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Pembatalan maksimal 24 jam sebelum jadwal untuk refund 50%</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Wahana dapat dibatalkan jika cuaca tidak mendukung (full refund)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Siap Memesan Wahana Favorit Anda?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Hubungi kami sekarang untuk informasi lebih lanjut atau booking langsung
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-primary hover:shadow-2xl"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                Kembali ke Beranda
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                Pesan via WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceList;