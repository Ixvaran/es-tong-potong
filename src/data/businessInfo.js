export const businessInfo = {
    name: "Es Tong-Potong",
    tagline: "Potongin Dong!",
    whatsapp: "6287742229257",
    displayPhone: "0877-4222-9257",
    instagram: "@es.tongpotong",
    instagramUrl: "https://instagram.com/es.tongpotong",
    maps: "https://www.google.com/maps/search/?api=1&query=Fakultas+Sains+dan+Matematika+Universitas+Diponegoro+Tembalang+Semarang",
    location: "Fakultas Sains dan Matematika, Universitas Diponegoro, Tembalang, Semarang",
    year: 2026,
};

export const formatWhatsAppLink = (message) => {
    return `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
};