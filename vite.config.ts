import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});