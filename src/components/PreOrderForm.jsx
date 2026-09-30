import { useState } from "react";
import { Plus, Minus, Send, MapPin, Store } from "lucide-react";
import { products, formatPrice } from "../data/products";
import { businessInfo, formatWhatsAppLink } from "../data/businessInfo";

export default function PreOrderForm() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        quantities: { stroberi: 0, mangga: 0, melon: 0, cookies: 0 },
        pickup: "bazaar",
        note: "",
    });

    const updateQty = (id, delta) => {
        setForm((prev) => ({
            ...prev,
            quantities: {
                ...prev.quantities,
                [id]: Math.max(0, prev.quantities[id] + delta),
            },
        }));
    };

    const totalItems = Object.values(form.quantities).reduce((a, b) => a + b, 0);
    const hasUnknownPrice = products.some((p) => !p.price || p.price === 0);
    const totalPrice = products.reduce(
        (sum, p) => sum + p.price * form.quantities[p.id],
        0
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderLines = products
            .map((p) => `- ${p.name}: ${form.quantities[p.id]}`)
            .join("\n");

        const pickupLabel =
            form.pickup === "bazaar" ? "Ambil di Bazaar" : "Ambil di lokasi lain";

        const totalLabel = hasUnknownPrice
            ? "[TOTAL]"
            : `Rp ${totalPrice.toLocaleString("id-ID")}`;

        const message = `Halo ${businessInfo.name}! Saya ingin melakukan pre-order.

Nama: ${form.name}
No. WhatsApp: ${form.phone}

Pesanan:
 ${orderLines}

Total: ${totalLabel}

Metode pengambilan: ${pickupLabel}

Catatan: ${form.note || "-"}

Mohon konfirmasi pesanannya. Terima kasih!`;

        window.open(formatWhatsAppLink(message), "_blank");
    };

    return (
        <section id="pre-order" className="py-20 md:py-28 bg-cream relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-soft/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-light/50 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-2xl mx-auto reveal">
                    <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                        PRE-ORDER
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-choco">
                        PRE-ORDER SEKARANG
                    </h2>
                    <p className="mt-4 text-ink/70 text-base md:text-lg">
                        Isi pesananmu dan lanjutkan konfirmasi melalui WhatsApp.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 md:mt-12 bg-white rounded-3xl p-4 sm:p-6 md:p-10 shadow-xl border border-choco/5 reveal"
                >
                    {/* Name & Phone */}
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-choco mb-2">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                placeholder="Masukkan nama kamu"
                                className="w-full px-4 py-3 rounded-2xl bg-cream border border-choco/10 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-choco mb-2">
                                Nomor WhatsApp
                            </label>
                            <input
                                type="tel"
                                required
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                placeholder="08xxxxxxxxxx"
                                className="w-full px-4 py-3 rounded-2xl bg-cream border border-choco/10 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Flavor Quantities */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-choco mb-3">
                            Pilih Rasa & Jumlah
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {products.map((p) => (
                                <div
                                    key={p.id}
                                    className="flex items-center justify-between bg-cream rounded-2xl p-3 sm:p-4 border border-choco/5"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span
                                            className="w-3 h-10 rounded-full flex-shrink-0"
                                            style={{ background: p.color }}
                                        />
                                        <div className="min-w-0">
                                            <p className="font-semibold text-sm sm:text-base text-choco truncate">{p.name}</p>
                                            <p className="text-xs text-ink/60">{formatPrice(p.price)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <button
                                            type="button"
                                            onClick={() => updateQty(p.id, -1)}
                                            disabled={form.quantities[p.id] === 0}
                                            className="w-10 h-10 rounded-full bg-white border border-choco/10 flex items-center justify-center text-choco hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-7 text-center font-bold text-choco text-base">
                                            {form.quantities[p.id]}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => updateQty(p.id, 1)}
                                            className="w-10 h-10 rounded-full bg-choco text-white flex items-center justify-center hover:bg-primary transition-all active:scale-95"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pickup Method */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-choco mb-3">
                            Metode Pengambilan
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                            <label
                                className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${form.pickup === "bazaar"
                                        ? "border-primary bg-primary-light/40"
                                        : "border-choco/10 bg-cream hover:bg-primary-light/20"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="pickup"
                                    value="bazaar"
                                    checked={form.pickup === "bazaar"}
                                    onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                                    className="sr-only"
                                />
                                <Store className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-choco">Ambil di Bazaar</span>
                            </label>
                            <label
                                className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${form.pickup === "other"
                                        ? "border-primary bg-primary-light/40"
                                        : "border-choco/10 bg-cream hover:bg-primary-light/20"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="pickup"
                                    value="other"
                                    checked={form.pickup === "other"}
                                    onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                                    className="sr-only"
                                />
                                <MapPin className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-choco">Ambil di lokasi lain</span>
                            </label>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-choco mb-2">Catatan</label>
                        <textarea
                            value={form.note}
                            onChange={(e) => setForm({ ...form, note: e.target.value })}
                            rows={3}
                            placeholder="Contoh: tolong dibungkus terpisah, dsb."
                            className="w-full px-4 py-3 rounded-2xl bg-cream border border-choco/10 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base sm:text-sm resize-none"
                        />
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between bg-choco text-white rounded-2xl p-5 mb-6">
                        <div>
                            <p className="text-xs text-white/60 uppercase tracking-wide">
                                Total ({totalItems} item)
                            </p>
                            <p className="text-2xl font-display font-bold">
                                {hasUnknownPrice ? "Rp [TOTAL]" : `Rp ${totalPrice.toLocaleString("id-ID")}`}
                            </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                            <Send className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={totalItems === 0 || !form.name || !form.phone}
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-xl"
                    >
                        <Send className="w-5 h-5" />
                        Kirim Pesanan via WhatsApp
                    </button>
                    <p className="text-center text-xs text-ink/50 mt-3">
                        Pesanan akan diteruskan ke WhatsApp admin untuk dikonfirmasi.
                    </p>
                </form>
            </div>
        </section>
    );
}