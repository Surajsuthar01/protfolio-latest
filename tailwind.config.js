/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                "bg-soft": "var(--bg-soft)",
                card: "var(--card)",
                "card-strong": "var(--card-strong)",
                line: "var(--line)",
                text: "var(--text)",
                muted: "var(--muted)",
                cyan: "var(--cyan)",
                mint: "var(--mint)",
                amber: "var(--amber)",
            },
            fontFamily: {
                sans: ["Manrope", "sans-serif"],
                display: ["Sora", "sans-serif"],
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                'gradient-xy': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                }
            },
            animation: {
                blink: 'blink 1s step-end infinite',
                'gradient-xy': 'gradient-xy 4s linear infinite',
            }
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("light", "body[data-theme='light'] &");
        }
    ],
}
