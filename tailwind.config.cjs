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
                }
            }
        }
    }
};

module.exports = config;
