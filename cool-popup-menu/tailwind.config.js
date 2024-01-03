/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      width: {
        "content": "max-content"
      },
      colors: {
        border: "rgba(255, 255, 255, 0.2)",
        link: "#A4A4A4",
        "button-gradient-1": "rgba(10, 9, 16, 0.5)",
        "button-gradient-2": "rgba(29, 29, 29, 0.5)"
      }
    }
  },
  plugins: []
};
