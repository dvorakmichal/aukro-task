/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        fontSize: {

            'xs': '.6875rem',
            'xssm': '.8125rem',
            'sm': '.9375rem',
            'minitiny': '.855rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.5625rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3.25rem',
            '6xl': '4rem',
            '7xl': '5rem',
            'tit': '1.125rem',
        }
    },
    variants: {
        extend: {
            display: ['group-focus']
        }
    },
    plugins: [],

}