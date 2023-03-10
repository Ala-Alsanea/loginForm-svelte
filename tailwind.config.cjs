/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    darkMode: false,
};