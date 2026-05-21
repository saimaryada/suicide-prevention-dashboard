/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#253042",
        muted: "#637083",
        panel: "#f7f8fb",
        line: "#d9dee8",
        public: {
          navy: "#1f3a5f",
          teal: "#2d7f7b",
          sage: "#7a9b76",
          amber: "#b7791f",
          rose: "#b45f5f",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 58, 95, 0.08)",
      },
    },
  },
  plugins: [],
};
