import { MessageCircle } from "lucide-react";
import IcePop from "./IcePop";
import { formatPrice } from "../data/products";
import { businessInfo, formatWhatsAppLink } from "../data/businessInfo";

export default function ProductCard({ product }) {
    const waLink = formatWhatsAppLink(
        `Halo ${businessInfo.name}! Saya tertarik dengan es potong rasa ${product.name}. Bisa dibantu pemesanannya?`
    );

    return (
        <div className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl border border-choco/5 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
            <div
                className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/5] flex items-center justify-center"
                style={{
                    background: `linear-gradient(135deg, ${product.color}18, ${product.color}35)`,
                }}
            >
                {/* decorative bg circle */}
                <div
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-30"
                    style={{ background: product.color }}
                />
                <IcePop
                    flavor={product.id}
                    className="h-44 md:h-48 w-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/85 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-semibold text-choco">
                    {product.tagline}
                </span>
            </div>

            <div className="flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl text-choco">{product.name}</h3>
                <p className="mt-1.5 text-sm text-ink/70 leading-relaxed flex-1">
                    {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="font-semibold text-primary text-base">
                        {formatPrice(product.price)}
                    </span>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 bg-choco hover:bg-primary text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
                    >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Pesan
                    </a>
                </div>
            </div>
        </div>
    );
}