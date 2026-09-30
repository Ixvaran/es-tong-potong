import { Instagram, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { businessInfo, formatWhatsAppLink } from "../data/businessInfo";
import IcePop from "./IcePop";

export default function ContactSection() {
    const waLink = formatWhatsAppLink(
        `Halo ${businessInfo.name}! Saya ingin bertanya tentang produk dan pemesanan.`
    );

    return (
        <section id="kontak" className="py-20 md:py-28 bg-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto reveal">
                    <span className="inline-block bg-primary-light text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        KONTAK
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-choco">
                        KONTAK & LOKASI
                    </h2>
                    <p className="mt-4 text-ink/70 text-base md:text-lg">
                        Yuk, mampir dan say hi!
                    </p>
                </div>

                <div className="mt-12 grid lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Contact info */}
                    <div className="reveal bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-choco/5">
                        <div className="space-y-4">
                            <a
                                href={businessInfo.instagramUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-cream hover:bg-primary-light/40 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-soft flex items-center justify-center flex-shrink-0">
                                    <Instagram className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-ink/50 uppercase tracking-wide">Instagram</p>
                                    <p className="font-semibold text-choco">{businessInfo.instagram}</p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-ink/30 group-hover:text-primary transition-colors flex-shrink-0" />
                            </a>

                            <a
                                href={waLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-cream hover:bg-primary-light/40 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-choco flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-ink/50 uppercase tracking-wide">WhatsApp</p>
                                    <p className="font-semibold text-choco">{businessInfo.displayPhone || businessInfo.whatsapp}</p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-ink/30 group-hover:text-primary transition-colors flex-shrink-0" />
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-cream">
                                <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-ink/50 uppercase tracking-wide">Lokasi</p>
                                    <p className="font-semibold text-choco text-sm leading-snug">
                                        {businessInfo.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-full font-semibold transition-all shadow-md"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Pesan via WhatsApp
                            </a>
                            <a
                                href={businessInfo.maps}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-choco/15 text-choco px-5 py-3 rounded-full font-semibold transition-all hover:bg-cream"
                            >
                                <MapPin className="w-4 h-4" />
                                Lihat Lokasi
                            </a>
                        </div>
                    </div>

                    {/* Booth illustration */}
                    <div className="reveal bg-gradient-to-br from-primary-light to-primary-soft/30 rounded-3xl p-8 md:p-12 relative overflow-hidden flex items-center justify-center min-h-[300px]">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: "radial-gradient(#54261D 1px, transparent 1px)",
                                backgroundSize: "24px 24px",
                            }}
                        />
                        <div className="relative text-center">
                            <div className="flex items-end justify-center gap-2 mb-6">
                                <IcePop flavor="stroberi" className="h-32 md:h-40 -rotate-6 drop-shadow-xl" />
                                <IcePop flavor="cookies" className="h-40 md:h-48 z-10 drop-shadow-2xl" />
                                <IcePop flavor="melon" className="h-32 md:h-40 rotate-6 drop-shadow-xl" />
                            </div>
                            <p className="font-display font-bold text-choco text-xl md:text-2xl">
                                Booth Es Tong-Potong
                            </p>
                            <p className="text-sm text-ink/60 mt-1">
                                Temui kami di bazaar kampus!
                            </p>
                        </div>
                        <span className="absolute top-6 right-6 bg-white px-3 py-1.5 rounded-full text-xs font-semibold text-choco shadow-md">
                            FSM Undip
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}