module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            fontFamily: {
                sans: "DM Sans",
            },
            colors: {
                primary: {
                    700: "#170F2E",
                    600: "#312163",
                    500: "#5531A7",
                    400: "#9251F7",
                    450: "#A478E8",
                    300: "#C696FC",
                    200: "#EFE2F9",
                    100: "#F8F2FC",
                },
                secondary: {
                    600: "#1F2347",
                    500: "#2A337E",
                    400: "#516CF7",
                    300: "#95AAFB",
                    200: "#E1E7FE",
                    100: "#F5F7FF",
                },
                gray: {
                    800: "#232339",
                    700: "#2E2E48",
                    600: "#47516B",
                    500: "#79819A",
                    400: "#ACB1C3",
                    300: "#D9DFE8",
                    200: "#E2E6EE",
                    100: "#F7F9FC",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
