import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project site: served at https://umairjmanj.github.io/pain-research/ so base is the subpath.
export default defineConfig({
  base: "/pain-research/",
  plugins: [react()],
});
