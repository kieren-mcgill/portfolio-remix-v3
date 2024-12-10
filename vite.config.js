import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
    server: {
        watch: {
            usePolling: true, // Avoid file watcher issues
        },
    },
    plugins: [remix()],
});
