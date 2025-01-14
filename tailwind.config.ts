/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-o-80": "#1e3a8a", // Replace with your desired blue shade
        "primary-o-600": "#2563eb",
        "gray-o-300": "#d1d5db",
        "gray-o-400/60": "rgba(156, 163, 175, 0.6)",
        "white/10": "rgba(255, 255, 255, 0.1)",
      },
      spacing: {
        18: "4.5rem",
        55: "13.75rem",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)", // Customize as needed
      },
    },
  },
  plugins: [],
};
