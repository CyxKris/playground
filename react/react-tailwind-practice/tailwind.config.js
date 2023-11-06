/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: "'Poppins', sans-serif",
                dm_sans: "'DM Sans', sans-serif",
            },
        },
    },
    plugins: [],
};
