import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                counters: resolve(__dirname, "counters.html"),
                accordion: resolve(__dirname, "accordion.html"),
                calculator: resolve(__dirname, "calculator.html"),
                tab: resolve(__dirname, "tab.html"),
                texteditor: resolve(__dirname, "texteditor.html"),
                task: resolve(__dirname, "task.html"),
            },
        },
    },
});