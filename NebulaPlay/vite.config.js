import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(new URL(".", import.meta.url).pathname, "src"),
    },
  },

  server: {
    host: true,
    port: 5173,
    open: false,
  },

  preview: {
    port: 4173,
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
});