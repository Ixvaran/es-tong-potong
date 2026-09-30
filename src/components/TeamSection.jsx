import { team } from "../data/team";

const Avatar = ({ name }) => {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const palettes = [
        "from-primary to-primary-soft",
        "from-choco to-[#7A4A3D]",
        "from-[#FFB347] to-[#FFD083]",
        "from-[#9EDB76] to-[#C5E8A8]",
        "from-primary-soft to-primary-light",
        "from-[#D4A574] to-[#E6C9A8]",
    ];
    const idx = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % palettes.length;

    return (
        <div
            className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${palettes[idx]} flex items-center justify-center text-white font-display font-bold text-xl md:text-2xl shadow-md`}
        >
            {initials}
        </div>
    );
};

export default function TeamSection() {
    return (
        <section id="tim" className="py-20 md:py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto reveal">
                    <span className="inline-block bg-primary-light text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        SOSOK DI BALIK TPTPD
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-choco">
                        TIM KAMI
                    </h2>
                    <p className="mt-4 text-ink/70 text-base md:text-lg">Behind the Potong</p>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="reveal bg-white rounded-3xl p-5 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-choco/5"
                            style={{ transitionDelay: `${i * 60}ms` }}
                        >
                            <div className="flex justify-center mb-3">
                                <Avatar name={member.name} />
                            </div>
                            <h3 className="font-display font-semibold text-base text-choco">
                                {member.name}
                            </h3>
                            <p className="text-xs text-ink/60 mt-0.5">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}