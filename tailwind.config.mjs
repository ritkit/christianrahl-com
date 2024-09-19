/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {

        extend: {
            colors: {
                "rblue": {
                    light: '#0A5098',
                    dark: '#0A5098'
                },
                "cblue": {
                    light: '#6599CE',
                    dark: '#6599CE'
                },
            }
        }
    },
    plugins: [],
}
