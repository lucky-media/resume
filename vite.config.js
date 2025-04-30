import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel(["resources/css/tailwind.css", "resources/js/site.js"]),
    ],
});
