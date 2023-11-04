/** @type {import('tailwindcss').Config}*/
const config = {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

    plugins: [require('flowbite/plugin')],

    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                // flowbite-svelte
                primary: {
                    50: "#FDECEC",
                    100: "#FCD9D9",
                    200: "#F9B4B4",
                    300: "#F58E8E",
                    400: "#F26969",
                    500: "#EF4444",
                    600: "#E11313",
                    700: "#A90F0F",
                    800: "#710A0A",
                    900: "#380505",
                    950: "#1C0202"
                },
                'torch-red': {
                    '50': '#fff0f2',
                    '100': '#ffdde3',
                    '200': '#ffc0ca',
                    '300': '#ff94a6',
                    '400': '#ff5773',
                    '500': '#ff2348',
                    '600': '#ff1a40',
                    '700': '#d70024',
                    '800': '#b10320',
                    '900': '#920a21',
                    '950': '#50000d',
                }                
            }
        }
    }
};

module.exports = config;
