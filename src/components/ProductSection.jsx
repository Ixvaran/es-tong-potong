import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
    return (
        <section id="menu" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto reveal">
                    <span className="inline-block bg-primary-light text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        MENU KAMI
                    </span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-choco">
                        VARIAN RASA
                    </h2>
                    <p className="mt-4 text-ink/70 text-base md:text-lg">
                        Pilih rasa favoritmu atau coba semuanya!
                    </p>
                </div>

                <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {products.map((p, i) => (
                        <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                            <ProductCard product={p} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}