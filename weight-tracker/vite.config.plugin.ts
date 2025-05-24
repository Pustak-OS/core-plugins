import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "src-client"),
  build: {
    outDir: path.resolve(__dirname, "dist/client"),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src-client/index.tsx"),
      name: "WeightTrackerPlugin",
      fileName: "index",
      formats: ["es"],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      // if you import anything via '@plugin', adjust as needed
      "@plugin": path.resolve(__dirname, "src-client"),
    },
  },
});
