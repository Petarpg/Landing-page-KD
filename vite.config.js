// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Landing-page-KD/", // <-- THIS IS THE IMPORTANT PART
  plugins: [react()],
});
