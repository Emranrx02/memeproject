import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandBlue: "#0164FF",
        "custom-blue-light": "#85d7ff",
        "custom-blue-dark": "#1fb6ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
