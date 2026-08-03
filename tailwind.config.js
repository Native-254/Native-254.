/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0a",
        ink2: "#151412",
        line: "#2a2926",
        paper: "#ede9e0",
        paper2: "#e2ddd0",
        steel: "#8a8a82",
        yolk: "#f2c641",
        rust: "#c1401e",
        rust2: "#8f2c14",
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      boxShadow: {
        hard: "6px 6px 0 0 rgba(0,0,0,0.85)",
        hardYolk: "6px 6px 0 0 #f2c641",
        hardRust: "6px 6px 0 0 #c1401e",
      },
    },
  },
  plugins: [],
};
