import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import IcePop from "./IcePop";
import { businessInfo, formatWhatsAppLink } from "../data/businessInfo";

const flavors = [
    { id: "stroberi", name: "Stroberi", y: 8, rotate: -10, scale: 0.88 },
    { id: "mangga", name: "Mangga", y: 0, rotate: -3, scale: 0.96 },
    { id: "melon", name: "Melon", y: -4, rotate: 4, scale: 1 },
    { id: "cookies", name: "Cookies", y: 6, rotate: 10, scale: 0.92 },
];

export default function Hero() {
    const waLink = formatWhatsAppLink(
        `Halo ${businessInfo.name}! Saya ingin memesan Es Tong-Potong. Bisa dibantu?`
    );

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="beranda" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-soft/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl opacity-70" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
                    {/* LEFT */}
                    <div className="reveal text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-choco/5">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span className="text-xs font-semibold text-choco tracking-wide">
                                Jajanan Masa Kecil, Rasa Masa Kini
                            </span>
                        </div>

                        <h1 className="font-display font-bold text-choco leading-[0.95] tracking-tight">
                            <span className="block text-5xl sm:text-6xl lg:text-7xl">ES</span>
                            <span className="block text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-primary via-[#FF7BAA] to-primary-soft bg-clip-text text-transparent">
                                TONG-POTONG
                            </span>
                        </h1>

                        <p className="mt-4 text-2xl md:text-3xl font-display font-semibold text-choco/80">
                            "Potongin Dong!"
                        </p>

                        <p className="mt-5 text-base md:text-lg text-ink/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Es potong klasik dengan lapisan cokelat dan empat pilihan rasa favoritmu.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-7 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Pesan Sekarang
                            </a>
                            <a
                                href="#menu"
                                onClick={(e) => scrollTo(e, "#menu")}
                                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-light text-choco border border-choco/10 px-7 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5"
                            >
                                Lihat Menu
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
                            <div>
                                <p className="text-2xl font-display font-bold text-primary">4</p>
                                <p className="text-xs text-ink/60">Varian Rasa</p>
                            </div>
                            <div className="h-8 w-px bg-choco/10" />
                            <div>
                                <p className="text-2xl font-display font-bold text-primary">100%</p>
                                <p className="text-xs text-ink/60">Bikin Happy</p>
                            </div>
                            <div className="h-8 w-px bg-choco/10" />
                            <div>
                                <p className="text-2xl font-display font-bold text-primary">Tembalang</p>
                                <p className="text-xs text-ink/60">Semarang</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - ice pops */}
                    <div className="reveal relative">
                        {/* Soft background card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-cream to-primary-soft/30 rounded-[3rem] rotate-3" />
                        <div className="absolute inset-0 bg-white/40 rounded-[3rem] -rotate-2" />

                        <div className="relative h-[380px] md:h-[440px] flex items-center justify-center gap-1 md:gap-2 px-2 py-8">
                            {flavors.map((f, i) => (
                                <div
                                    key={f.id}
                                    className="relative transition-transform duration-300 hover:!scale-110 hover:!-translate-y-3"
                                    style={{
                                        transform: `translateY(${f.y}px) rotate(${f.rotate}deg) scale(${f.scale})`,
                                    }}
                                >
                                    <IcePop flavor={f.id} className="h-52 md:h-64 w-auto drop-shadow-2xl" />
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-2.5 py-1 rounded-full text-[10px] md:text-xs font-semibold text-choco shadow-md whitespace-nowrap">
                                        {f.name}
                                    </span>
                                </div>
                            ))}

                            {/* Decorative labels */}
                            <div className="absolute top-4 right-4 md:right-6 bg-white px-3.5 py-1.5 rounded-full text-xs font-bold text-primary shadow-md rotate-3">
                                4 Varian Rasa
                            </div>
                            <div className="absolute top-4 left-4 md:left-6 bg-choco text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md -rotate-3">
                                Lapisan Cokelat
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}