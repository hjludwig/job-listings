module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: ["Spartan", "sans-serif"],
        },
        extend: {
            colors: {
                cyan: {
                    default: "hsl(180, 29%, 50%)",
                    verylight: "hsl(180, 52%, 96%)",
                    light: " hsl(180, 31%, 95%)",
                    dark: "hsl(180, 8%, 52%)",
                    verydark: "hsl(180, 14%, 20%)",
                },
            },
            boxShadow: {
                cyan: "0px 10px 20px 0 hsl(180deg 29% 50% / 25%)",
            },
            fontSize: {
                base: "15px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
