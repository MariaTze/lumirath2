/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                medieval: ['"MedievalSharp"', 'serif'],
                uncial: ['"Uncial Antiqua"', 'serif'],
                cinzel: ['"Cinzel Decorative"', 'serif'],
                imfell: ['"IM Fell English"', 'serif'],
            },
        },
    },
    plugins: [],
}
