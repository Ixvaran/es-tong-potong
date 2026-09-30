import { MessageCircle } from "lucide-react";
import { businessInfo, formatWhatsAppLink } from "../data/businessInfo";

export default function FloatingWhatsApp() {
    const waLink = formatWhatsAppLink(
        `Halo ${businessInfo.name}! Saya ingin bertanya / pesan Es Tong-Potong.`
    );

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-3 sm:px-5 sm:py-3.5 rounded-full font-semibold shadow-2xl shadow-black/25 hover:scale-105 active:scale-95 transition-all duration-300 group"
            aria-label="Pesan via WhatsApp"
        >
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white"></span>
            </span>
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span className="text-xs sm:text-sm tracking-wide">Pesan via WA</span>
        </a>
    );
}
