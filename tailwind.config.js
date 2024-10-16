const tailwindcss = require("tailwindcss");

module.exports = {
    content: ["./src/**/*.tsx"],
    plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
    theme: {
        colors: {
            warning: {
                100: "#FCEDF2",
                200: "#F5C2D4",
                300: "#EF8AB2",
                400: "#E64292",
                500: "#AA2E6B",
                600: "#721C46",
                700: "#3E0B24",
            },
            info: {
                100: "#CEDDFA",
                200: "#8FB7F4",
                300: "#4292E6",
                400: "#306DAE",
                500: "#1E4A78",
                600: "#0E2A47",
                700: "#041122",
            },
            success: {
                100: "#FCEDF2",
                200: "#F5C2D4",
                300: "#EF8AB2",
                400: "#E64292",
                500: "#AA2E6B",
                600: "#721C46",
                700: "#3E0B24",
            },
            neutral: {
                100: "#DCDCDE",
                200: "#B3B5B9",
                300: "#8C8F95",
                400: "#686B6F",
                500: "#47484C",
                600: "#28292B",
                700: "#101112",
            }
        },
        spacing: {
            xs: "clamp(0.4375rem, 0.4158rem + 0.1087vw, 0.5rem)",
            s: "clamp(0.875 rem, 0.8315 rem + 0.2174 vw, 1 rem)",
            m: "clamp(1.3125rem, 1.2473rem + 0.3261vw, 1.5rem)",
            l: "clamp(1.75rem, 1.663rem + 0.4348vw, 2rem)",
            xl: "clamp(2.625rem, 2.4946rem + 0.6522vw, 3rem)",
        },
        fontWeigth: {
            regular: "400",
            medium: "500",
            bold: "600",
        },
        borderRadius: {
            s: "0.125rem",
            m: "0.25rem",
            full: "100wmax"
        }
    }
};