import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base so the built site works at https://<user>.github.io/<any-repo-name>/
  // without needing to hardcode the repo name here.
  base: "./",
});
