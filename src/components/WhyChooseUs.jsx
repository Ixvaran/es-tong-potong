import { Cookie, Tag, Heart, Layers } from "lucide-react";

const values = [
    {
        icon: Cookie,
        title: "Lapisan Cokelat Lezat",
        desc: "Perpaduan es yang segar dengan lapisan cokelat renyah.",
    },
    {
        icon: Tag,
        title: "Harga Terjangkau",
        desc: "Nikmat tanpa menguras kantong.",
    },
    {
        icon: Heart,
        title: "Rasa Nostalgia",
        desc: "Menghadirkan kembali jajanan masa kecil dengan sentuhan baru.",
    },
    {
        icon: Layers,
        title: "Pilihan Rasa Beragam",
        desc: "Selalu ada rasa untuk setiap selera.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 md:py-24 bg-primary-light/60 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto reveal">
                    <span className="inline-block bg-white text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        WHY US
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-choco">
                        KENAPA PILIH ES TONG-POTONG?
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {values.map((v, i) => (
                        <div
                            key={i}
                            className="reveal bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <div className="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center mb-4">
                                <v.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-display font-semibold text-lg text-choco leading-snug">
                                {v.title}
                            </h3>
                            <p className="mt-2 text-sm text-ink/70 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}