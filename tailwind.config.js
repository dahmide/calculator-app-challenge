/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "src/**/*.{js,jsx}"],
    theme: {
        fontFamily: {
            body: ["League spartan", "sans-serif"]
        },
        colors: {
            "bcm-100": "var(--bcm-100)",
            "bcm-200": "var(--bcm-200)",
            "bcm-300": "var(--bcm-300)",
            "bck-100": "var(--bck-100)",
            "sck-100": "var(--sck-100)",
            "bck-200": "var(--bck-200)",
            "sck-200": "var(--sck-200)",
            "bck-300": "var(--bck-300)",
            "sck-300": "var(--sck-300)",
            "tcm-idx": "var(--tcm-idx)",
            "tcm-100": "var(--tcm-100)",
            "tcm-200": "var(--tcm-200)",
            "tcm-300": "var(--tcm-300)",
            "tcm-400": "var(--tcm-400)",
        },
        extend: {
            fontSize: {
                "base": "1.000rem",
                "copy": "1.375rem"
            }
        },
    },
    plugins: [],
}

