/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#081845",
        "ocean-blue": "#09254d",
        "charcoal-blue": "#1A2A57",
        sky: "#E1E2F9",
        "sky-blue": "#F0F4F9",
        "blue-gray": "#565872",
        "dim-gray": "#707070",
        "silver-gray": "#D1D4DD",
        purple: "#686EE2",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        hero: "url('/hero/placeholder.png')",
        "hero-bg": "url('/placeholder.png')",
      },
      spacing: {
        container: "0.938rem",
        section: "120px",
      },
      animation: {
        pulse: "pulse var(--duration) ease-out infinite",
        shadows: "shadows 1s linear infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 var(--pulse-color)",
          },
          "50%": {
            boxShadow: "0 0 0 8px var(--pulse-color)",
          },
        },
        shadows: {
          "0%": {
            boxShadow:
              "0 0 0 0 rgba(255, 255, 255, 0.2), 0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 30px rgba(255, 255, 255, 0.2)",
          },
          "100%": {
            boxShadow:
              "0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 30px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0)",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      maxWidth: {
        container: "1170px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
