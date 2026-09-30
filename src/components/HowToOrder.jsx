import { IceCream, ClipboardList, MessageCircle, CheckCircle2 } from "lucide-react";

const steps = [
    { icon: IceCream, title: "Pilih Rasa", desc: "Pilih varian es favoritmu." },
    { icon: ClipboardList, title: "Isi Form", desc: "Masukkan jumlah dan data pemesanan." },
    { icon: MessageCircle, title: "Kirim ke WhatsApp", desc: "Pesanan otomatis diteruskan ke WhatsApp." },
    { icon: CheckCircle2, title: "Konfirmasi", desc: "Admin mengonfirmasi pesananmu." },
];

export default function HowToOrder() {
    return (
        <section id="cara-pesan" className="py-20 md:py-28 bg-primary-light/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto reveal">
                    <span className="inline-block bg-white text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        LANGKAH PEMESANAN
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-choco">
                        CARA PESAN
                    </h2>
                    <p className="mt-4 text-ink/70 text-base md:text-lg">
                        Mudah banget, cuma 4 langkah!
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connecting line on desktop */}
                    <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-choco/15" />

                    {steps.map((s, i) => (
                        <div
                            key={i}
                            className="reveal relative bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="relative inline-flex mb-4">
                                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center relative z-10">
                                    <s.icon className="w-8 h-8 text-primary" />
                                </div>
                                <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full text-xs font-bold flex items-center justify-center z-20 shadow-md">
                                    {i + 1}
                                </span>
                            </div>
                            <h3 className="font-display font-semibold text-lg text-choco">{s.title}</h3>
                            <p className="mt-2 text-sm text-ink/70 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}