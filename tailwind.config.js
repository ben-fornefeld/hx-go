/** @type {import('tailwindcss').Config} */
export const content = ["./src/templates/**/*.templ", "./src/views/**/*.templ"];
export const theme = {
  extend: {
    fontFamily: {
      mono: ["Courier Prime", "monospace"],
    },
    colors: {
      background: "var(--c-background)",
      foreground: "var(--c-foreground)",
      primary: {
        DEFAULT: "var(--c-primary)",
        foreground: "var(--c-primary-foreground)",
      },
      secondary: {
        DEFAULT: "var(--c-secondary)",
        foreground: "var(--c-secondary-foreground)",
      },
      muted: {
        DEFAULT: "var(--c-muted)",
        foreground: "var(--c-muted-foreground)",
      },
      accent: {
        DEFAULT: "var(--c-accent)",
        foreground: "var(--c-accent-foreground)",
      },
      destructive: {
        DEFAULT: "var(--c-destructive)",
        foreground: "var(--c-destructive-foreground)",
      },
      ring: {
        DEFAULT: "var(--c-ring)",
        foreground: "var(--c-ring-foreground)",
      },
    },
  },
};
export const plugins = [require("tailwind-scrollbar")];
export const corePlugins = { preFlight: true };
