import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "Di mana lokasi booth Es Tong-Potong?",
        a: "Booth kami berlokasi di Fakultas Sains dan Matematika (FSM) Universitas Diponegoro, Tembalang, Semarang. Kamu bisa cek petunjuk lokasi di bagian Kontak & Lokasi!",
    },
    {
        q: "Berapa harga 1 pcs Es Tong-Potong?",
        a: "Harganya sangat terjangkau, yaitu Rp 5.000 untuk semua varian rasa (Stroberi, Mangga, Melon, dan Cookies) dengan celupan cokelat yang lezat.",
    },
    {
        q: "Berapa lama es bisa bertahan tanpa leleh?",
        a: "Jika disimpan dalam styrofoam/boks pendingin, Es Tong-Potong bisa bertahan 1-2 jam. Namun paling nikmat langsung dimakan saat dingin!",
    },
    {
        q: "Bagaimana cara melakukan pre-order?",
        a: "Kamu bisa mengisi formulir di menu Pre-Order pada website ini. Setelah memilih rasa dan jumlah, klik 'Kirim Pesanan via WhatsApp' untuk otomatis terhubung dengan admin.",
    },
    {
        q: "Apakah ada minimal pembelian untuk pre-order?",
        a: "Tidak ada minimal pembelian! Kamu bisa memesan mulai dari 1 pcs es potong.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="py-20 md:py-28 bg-cream relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-2xl mx-auto reveal">
                    <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        TANYA JAWAB
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-choco">
                        PERTANYAAN UMUM
                    </h2>
                    <p className="mt-4 text-ink/70 text-base md:text-lg">
                        Ada pertanyaan? Temukan jawabannya di sini!
                    </p>
                </div>

                <div className="mt-12 space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="reveal bg-white rounded-2xl border border-choco/10 overflow-hidden shadow-sm transition-all"
                                style={{ transitionDelay: `${idx * 60}ms` }}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-primary-light/20 transition-colors"
                                >
                                    <span className="flex items-center gap-3 font-display font-semibold text-choco text-base md:text-lg">
                                        <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        {faq.q}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-choco/60 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-primary" : ""
                                            }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-5 pt-1 text-sm md:text-base text-ink/75 leading-relaxed border-t border-choco/5 bg-cream/30">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
