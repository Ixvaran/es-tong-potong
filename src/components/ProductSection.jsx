import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductSection() {
    return (
        <section id="menu" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-soft to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto reveal">
                    <span className="inline-block bg-primary-light text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        MENU KAMI
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-choco">
                        VARIAN RASA
                    </h2>
                    <p className="mt-4 text-ink/70 text-base md:text-lg">
                        Pilih rasa favoritmu atau coba semuanya!
                    </p>
                </div>

                {/* Product Cards Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {products.map((product, i) => (
                        <div
                            key={product.id}
                            className="reveal"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
