import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                counters: resolve(__dirname, "counters.html"),
                accordion: resolve(__dirname, "accordion.html"),
            },
        },
    },
});