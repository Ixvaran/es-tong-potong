import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
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

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    const waLink = formatWhatsAppLink(
        `Halo ${businessInfo.name}! Saya ingin pesan Es Tong-Potong. Bisa dibantu?`
    );

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-cream/90 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(84,38,29,0.15)]"
                    : "bg-cream/60 backdrop-blur-sm"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#beranda"
                        onClick={(e) => handleNavClick(e, "#beranda")}
                        className="flex items-center gap-2 group"
                    >
                        <img
                            src="/logo.png"
                            alt="Es Tong-Potong Logo"
                            className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="font-display font-bold text-base md:text-lg text-choco tracking-tight">
                                ES TONG-POTONG
                            </span>
                            <span className="text-[10px] md:text-xs text-primary font-medium -mt-0.5">
                                Potongin Dong!
                            </span>
                        </div>
                    </a>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-3 py-2 text-sm font-medium text-ink/80 hover:text-primary transition-colors rounded-lg hover:bg-primary-light/50"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA desktop */}
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden lg:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Pesan Sekarang
                    </a>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary-light text-choco hover:bg-primary-soft/40 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[480px] pb-4" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-1 pt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-3 text-sm font-medium text-ink hover:bg-primary-light/50 hover:text-primary rounded-xl transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full font-semibold text-sm shadow-md"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Pesan Sekarang
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}