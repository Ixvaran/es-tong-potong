export const products = [
    {
        id: "stroberi",
        name: "Stroberi",
        description: "Manis dan segar dengan rasa buah stroberi pilihan.",
        price: 5000,
        color: "#F43F7A",
        accent: "#F9B6CB",
        tagline: "Manis & Segar",
    },
    {
        id: "mangga",
        name: "Mangga",
        description: "Rasa mangga yang manis dan menyegarkan.",
        price: 5000,
        color: "#FFB347",
        accent: "#FFD083",
        tagline: "Tropis & Manis",
    },
    {
        id: "melon",
        name: "Melon",
        description: "Manis, ringan, dan cocok dinikmati kapan saja.",
        price: 5000,
        color: "#9EDB76",
        accent: "#C5E8A8",
        tagline: "Ringan & Lembut",
    },
    {
        id: "cookies",
        name: "Cookies",
        description: "Rasa creamy dengan potongan cookies yang gurih.",
        price: 5000,
        color: "#D4A574",
        accent: "#E6C9A8",
        tagline: "Creamy & Gurih",
    },
];

export const formatPrice = (price) => {
    if (price === undefined || price === null) return "Rp 5.000";
    return `Rp ${price.toLocaleString("id-ID")}`;
};