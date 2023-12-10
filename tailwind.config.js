/** @type {import("tailwindcss").Config} */
module.exports = {
    content: {
        relative: true,
        files: [
            'index.html', // main index file & entrypoint
            './docs/*.{html}',
            './docs/assets/css/*.{css}',
            './docs/assets/js/*.{html,js}',
        ],
    },
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Inter', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [require('tailwindcss-owl')],
}
