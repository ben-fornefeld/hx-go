/** @type {import('tailwindcss').Config} */
export const content = ["./src/templates/**/*.templ", "./src/views/**/*.templ"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      background: "hsl(var(--c-background))",
      foreground: "hsl(var(--c-foreground))",
      primary: {
        DEFAULT: "hsl(var(--c-primary))",
        foreground: "hsl(var(--c-primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--c-secondary))",
        foreground: "hsl(var(--c-secondary-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--c-muted))",
        foreground: "hsl(var(--c-muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--c-accent))",
        foreground: "hsl(var(--c-accent-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--c-destructive))",
        foreground: "hsl(var(--c-destructive-foreground))",
      },
      ring: {
        DEFAULT: "hsl(var(--c-ring))",
        foreground: "hsl(var(--c-ring-foreground))",
      },
    },
  },
};
export const plugins = [require("tailwind-scrollbar")];
export const corePlugins = { preFlight: true };
