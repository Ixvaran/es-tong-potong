import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import IcePop from "./IcePop";
import { businessInfo, formatWhatsAppLink } from "../data/businessInfo";

const flavors = [
    { id: "stroberi", name: "Stroberi", y: 6, rotate: -8, scale: 0.85 },
    { id: "mangga", name: "Mangga", y: 0, rotate: -2, scale: 0.92 },
    { id: "melon", name: "Melon", y: -3, rotate: 3, scale: 0.95 },
    { id: "cookies", name: "Cookies", y: 4, rotate: 8, scale: 0.88 },
];

const IcePopsCard = () => (
    <div className="reveal relative w-full">
        {/* Soft background card */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-cream to-primary-soft/30 rounded-[2.5rem] sm:rounded-[3rem] rotate-2" />
        <div className="absolute inset-0 bg-white/40 rounded-[2.5rem] sm:rounded-[3rem] -rotate-1" />

        <div className="relative h-[290px] xs:h-[320px] sm:h-[380px] md:h-[440px] flex items-center justify-center gap-0.5 sm:gap-2 px-1 sm:px-4 py-6 sm:py-8">
            {flavors.map((f) => (
                <div
                    key={f.id}
                    className="relative transition-transform duration-300 hover:!scale-110 hover:!-translate-y-2"
                    style={{
                        transform: `translateY(${f.y}px) rotate(${f.rotate}deg) scale(${f.scale})`,
                    }}
                >
                    <IcePop flavor={f.id} className="h-40 xs:h-44 sm:h-52 md:h-64 w-auto drop-shadow-xl" />
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-semibold text-choco shadow-md whitespace-nowrap">
                        {f.name}
                    </span>
                </div>
            ))}

            {/* Decorative labels */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-6 bg-white px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-primary shadow-md rotate-2">
                4 Varian Rasa
            </div>
            <div className="absolute top-3 left-3 sm:top-4 sm:left-6 bg-choco text-white px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold shadow-md -rotate-2">
                Lapisan Cokelat
            </div>
        </div>
    </div>
);

export default function Hero() {
    const waLink = formatWhatsAppLink(
        `Halo ${businessInfo.name}! Saya ingin memesan Es Tong-Potong. Bisa dibantu?`
    );

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="beranda" className="relative pt-20 sm:pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-soft/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl opacity-70" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">
                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        {/* Tagline Badge */}
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4 sm:mb-5 border border-choco/5">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span className="text-xs font-semibold text-choco tracking-wide">
                                Jajanan Masa Kecil, Rasa Masa Kini
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-display font-bold text-choco leading-[0.95] tracking-tight">
                            <span className="block text-4xl sm:text-6xl lg:text-7xl">ES</span>
                            <span className="block text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-primary via-[#FF7BAA] to-primary-soft bg-clip-text text-transparent mt-1 sm:mt-0">
                                TONG-POTONG
                            </span>
                        </h1>

                        {/* Tagline Quote */}
                        <p className="mt-3 sm:mt-4 text-xl sm:text-3xl font-display font-semibold text-choco/80">
                            "Potongin Dong!"
                        </p>

                        {/* Description */}
                        <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-ink/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Es potong klasik dengan lapisan cokelat dan empat pilihan rasa favoritmu.
                        </p>

                        {/* MOBILE ONLY: Ice Pops Card before buttons */}
                        <div className="w-full lg:hidden my-6">
                            <IcePopsCard />
                        </div>

                        {/* CTA Buttons */}
                        <div className="w-full flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 sm:px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all shadow-lg shadow-primary/30 hover:shadow-xl active:scale-95"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Pesan Sekarang
                            </a>
                            <a
                                href="#menu"
                                onClick={(e) => scrollTo(e, "#menu")}
                                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-light text-choco border border-choco/10 px-6 sm:px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all active:scale-95"
                            >
                                Lihat Menu
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Stats Badges */}
                        <div className="mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-3 sm:gap-6 px-2 w-full">
                            <div className="text-center sm:text-left">
                                <p className="text-xl sm:text-2xl font-display font-bold text-primary">4</p>
                                <p className="text-[11px] sm:text-xs text-ink/60 whitespace-nowrap">Varian Rasa</p>
                            </div>
                            <div className="h-7 w-px bg-choco/15" />
                            <div className="text-center sm:text-left">
                                <p className="text-xl sm:text-2xl font-display font-bold text-primary">100%</p>
                                <p className="text-[11px] sm:text-xs text-ink/60 whitespace-nowrap">Bikin Happy</p>
                            </div>
                            <div className="h-7 w-px bg-choco/15" />
                            <div className="text-center sm:text-left">
                                <p className="text-xl sm:text-2xl font-display font-bold text-primary">Tembalang</p>
                                <p className="text-[11px] sm:text-xs text-ink/60 whitespace-nowrap">Semarang</p>
                            </div>
                        </div>
                    </div>

                    {/* DESKTOP ONLY: Ice Pops Card on right side */}
                    <div className="hidden lg:block">
                        <IcePopsCard />
                    </div>
                </div>
            </div>
        </section>
    );
}