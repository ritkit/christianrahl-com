/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'darkblue': '#0A5098',
        'lightblue': '#6599CE'
        },
        extend: {},
    },
    plugins: [],

    lightmode: 'class',
    theme:{
    }
}
