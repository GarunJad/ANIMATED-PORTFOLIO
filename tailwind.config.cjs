/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505", // Deep black
                primary: "#ff0033", // Manga Red
                secondary: "#ffffff", // Pure White
                accent: "#7c3aed", // Keep purple for subtle accents (Gojo)
                surface: "#121212",
                "manga-red": "#ff0033",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'], // For headings
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #ff0033, 0 0 10px #ff0033' },
                    '100%': { boxShadow: '0 0 20px #ff0033, 0 0 40px #ff0033' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}
