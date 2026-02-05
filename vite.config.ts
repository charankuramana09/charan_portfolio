import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/charan_portfolio/",   

  plugins: [react()],

  server: {
    open: true,
  },
});
