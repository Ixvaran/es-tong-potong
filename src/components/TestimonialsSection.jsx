import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Farhan Fauzul Adzim",
        role: "Mahasiswa FSM Undip",
        avatar: "FA",
        color: "from-primary to-[#FF7BAA]",
        stars: 5,
        review: "Es potong rasa Cookies-nya juara banget! Potongan cookies-nya banyak dan cokelat luarnya crunchy pas digigit. Nostalgia banget rasa es SD tapi versi lebih modern!",
    },
    {
        name: "Radhitya Rizqi",
        role: "Mahasiswa FSM Undip",
        avatar: "RR",
        color: "from-choco to-[#7A4A3D]",
        stars: 5,
        review: "Varian Mangga-nya seger pol pas cuaca Tembalang lagi panas-panasnya. Mana harganya cuma Rp 5.000, ramah kantong mahasiswa banget!",
    },
    {
        name: "Intan Putri",
        role: "Mahasiswi FSM Undip",
        avatar: "IP",
        color: "from-[#FFB347] to-[#9EDB76]",
        stars: 5,
        review: "Pre-order lewat websitenya praktis banget! Tinggal klik langsung masuk WhatsApp admin, responnya cepat dan esnya diantarkan sesuai janjian.",
    },
];

export default function TestimonialsSection() {
    return (
        <section id="testimoni" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-light/40 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-2xl mx-auto reveal">
                    <span className="inline-block bg-primary-light text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        KATA PEMBELI
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-choco">
                        APA KATA MEREKA?
                    </h2>
                    <p className="mt-4 text-ink/70 text-base md:text-lg">
                        Dengarkan cerita manis dari pelanggan Es Tong-Potong!
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="reveal bg-cream/60 rounded-3xl p-6 md:p-8 border border-choco/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex gap-1 text-amber-400">
                                        {[...Array(item.stars)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                                        ))}
                                    </div>
                                    <Quote className="w-8 h-8 text-choco/15" />
                                </div>
                                <p className="text-choco/90 text-sm md:text-base leading-relaxed italic">
                                    "{item.review}"
                                </p>
                            </div>

                            <div className="mt-6 pt-6 border-t border-choco/10 flex items-center gap-3">
                                <div
                                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-display font-bold text-sm shadow-md flex-shrink-0`}
                                >
                                    {item.avatar}
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-sm text-choco">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-ink/50">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
