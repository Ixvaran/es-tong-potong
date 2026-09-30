/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#F43F7A",
                    pink: "#F43F7A",
                    soft: "#F9B6CB",
                    light: "#FDE7EF",
                },
                cream: "#FFF8F1",
                choco: {
                    DEFAULT: "#54261D",
                    light: "#7A4A3D",
                },
                ink: "#3A2725",
            },
            fontFamily: {
                display: ['Fredoka', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}