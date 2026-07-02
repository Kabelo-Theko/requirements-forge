/**
 * Requirements Forge "The Story Studio" — Tailwind consumption of tokens.css
 * Tokens are CSS custom properties (theme via html[data-theme]).
 */
module.exports = {
  content: ["./docs/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: ["selector", '[data-theme="night-studio"]'],
  theme: {
    fontFamily: {
      display: ["Young Serif", "Georgia", "serif"],
      sans: ["Onest", "system-ui", "sans-serif"],
      mono: ["Fragment Mono", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        porcelain: {
          DEFAULT: "var(--canvas)",
          sunken: "var(--canvas-sunken)",
          card: "var(--surface)",
          raised: "var(--surface-raised)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          mid: "var(--ink-mid)",
          light: "var(--ink-light)",
          muted: "var(--muted)",
        },
        studio: {
          DEFAULT: "var(--accent)",
          deep: "var(--accent-deep)",
          hover: "var(--accent-hover)",
          on: "var(--on-accent)",
          subtle: "var(--accent-subtle)",
          border: "var(--accent-border)",
        },
        guard: {
          verified: "var(--verified)", "verified-bg": "var(--verified-bg)",
          unverified: "var(--unverified)", "unverified-bg": "var(--unverified-bg)",
          warning: "var(--warning)", "warning-bg": "var(--warning-bg)",
          gap: "var(--gap)", "gap-bg": "var(--gap-bg)",
        },
        score: { high: "var(--score-high)", mid: "var(--score-mid)", low: "var(--score-low)" },
      },
      borderColor: { DEFAULT: "var(--border)", soft: "var(--border-soft)" },
      borderRadius: { row: "var(--radius)", card: "var(--radius-lg)", hero: "var(--radius-xl)", pill: "999px" },
      boxShadow: { 1: "var(--shadow)", 2: "var(--shadow-md)", focus: "var(--focus)" },
      maxWidth: { page: "920px" },
      transitionTimingFunction: {
        standard: "cubic-bezier(.2,0,0,1)",
        spring: "cubic-bezier(.34,1.26,.5,1)",
        emphasized: "cubic-bezier(.05,.7,.1,1)",
      },
      transitionDuration: { micro: "130ms", small: "220ms", large: "320ms", page: "420ms" },
    },
  },
  plugins: [],
};
