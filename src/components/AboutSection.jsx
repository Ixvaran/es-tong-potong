import { ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="tentang" className="py-20 md:py-28 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Visual */}
                    <div className="reveal relative order-2 lg:order-1">
                        <div className="relative bg-gradient-to-br from-primary-light via-[#fce9f1] to-primary-soft/30 rounded-[2.5rem] aspect-square overflow-hidden flex items-center justify-center">
                            {/* Decorative dotted bg */}
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage: "radial-gradient(#54261D 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            />

                            {/* Logo centered, large */}
                            <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-10">
                                <img
                                    src="/logo.png"
                                    alt="Es Tong-Potong"
                                    className="w-full max-w-[280px] md:max-w-[340px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-5 left-5 bg-white px-3 py-1.5 rounded-full text-xs font-semibold text-choco shadow">
                                Est. 2026
                            </div>
                            <div className="absolute bottom-5 right-5 bg-choco text-white px-4 py-2 rounded-2xl text-xs font-semibold shadow-lg -rotate-3">
                                Made in Tembalang
                            </div>
                            <div className="absolute top-5 right-5 bg-primary text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow rotate-3">
                                4 Rasa 🍫
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="reveal order-1 lg:order-2 text-center lg:text-left">
                        <span className="inline-block bg-primary-light text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                            TENTANG KAMI
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-choco leading-tight">
                            Dari jajanan masa kecil, jadi favorit hari ini.
                        </h2>
                        <p className="mt-5 text-ink/70 text-base md:text-lg leading-relaxed">
                            Es Tong-Potong lahir dari keinginan menghadirkan kembali jajanan es potong
                            yang sederhana, namun dikemas dengan rasa dan tampilan yang lebih menarik
                            bagi generasi sekarang. Dengan lapisan cokelat dan empat pilihan rasa, kami
                            ingin memberikan pengalaman nostalgia dalam setiap gigitan.
                        </p>
                        <a
                            href="#kontak"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                        >
                            Kenal Lebih Dekat
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}