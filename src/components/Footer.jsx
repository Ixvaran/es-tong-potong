import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { businessInfo, formatWhatsAppLink } from "../data/businessInfo";

const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Menu", href: "#menu" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Cara Pesan", href: "#cara-pesan" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "FAQ", href: "#faq" },
    { label: "Tim Kami", href: "#tim" },
    { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
    const waLink = formatWhatsAppLink(
        `Halo ${businessInfo.name}! Saya ingin bertanya tentang produk.`
    );

    const handleClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-choco text-cream relative overflow-hidden">
            {/* Chocolate drip on top */}
            <svg
                viewBox="0 0 1200 40"
                preserveAspectRatio="none"
                className="w-full h-6 md:h-8 absolute top-0 left-0 text-cream -translate-y-[99%]"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M0,0 L1200,0 L1200,20 
             C1150,40,1150,10,1100,20 
             C1050,40,1050,5,1000,20 
             C950,40,950,10,900,20 
             C850,38,850,5,800,20 
             C750,40,750,8,700,20 
             C650,38,650,10,600,20 
             C550,40,550,5,500,20 
             C450,38,450,10,400,20 
             C350,40,350,5,300,20 
             C250,38,250,10,200,20 
             C150,40,150,5,100,20 
             C50,38,50,10,0,20 Z"
                    fill="currentColor"
                />
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-white rounded-2xl p-1.5 shadow-md flex-shrink-0">
                                <img
                                    src="/logo.png"
                                    alt="Es Tong-Potong Logo"
                                    className="h-10 w-auto"
                                />
                            </div>
                            <div>
                                <p className="font-display font-bold text-lg">ES TONG-POTONG</p>
                                <p className="text-xs text-primary-soft">Potongin Dong!</p>
                            </div>
                        </div>
                        <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
                            Es potong klasik dengan lapisan cokelat. Jajanan masa kecil, rasa masa kini.
                        </p>
                    </div>

                    {/* Nav */}
                    <div>
                        <p className="font-display font-semibold text-sm uppercase tracking-wide mb-4 text-primary-soft">
                            Navigasi
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        onClick={(e) => handleClick(e, l.href)}
                                        className="text-sm text-cream/80 hover:text-primary-soft transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <p className="font-display font-semibold text-sm uppercase tracking-wide mb-4 text-primary-soft">
                            Ikuti Kami
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={businessInfo.instagramUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-xl bg-cream/10 hover:bg-primary flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-xl bg-cream/10 hover:bg-primary flex items-center justify-center transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a
                                href={businessInfo.maps}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-xl bg-cream/10 hover:bg-primary flex items-center justify-center transition-colors"
                                aria-label="Lokasi"
                            >
                                <MapPin className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-cream/70 leading-relaxed">
                            {businessInfo.location}
                        </p>
                    </div>
                </div>

                <div className="pt-6 border-t border-cream/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-cream/60">
                    <p>© {businessInfo.year} Es Tong-Potong. All rights reserved.</p>
                    <p>Made with care in Tembalang, Semarang.</p>
                </div>
            </div>
        </footer>
    );
}