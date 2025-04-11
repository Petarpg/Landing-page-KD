import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Landing-page-KD/", // Задай базовия път спрямо името на репото
});
