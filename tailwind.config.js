/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c",
        card: "#111116",
        accent: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
          glow: "rgba(124, 58, 237, 0.3)",
        },
        text: {
          primary: "#ffffff",
          secondary: "#9ca3af",
          muted: "#6b7280",
        },
        border: "#1f1f23",
      },
      borderRadius: {
        '2xl': '16px',
      },
    },
  },
  plugins: [],
}
