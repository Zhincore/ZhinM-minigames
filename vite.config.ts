import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  root: "./src/nui/",
  appType: "spa",
  envDir: __dirname,
  build: {
    emptyOutDir: true,
    outDir: "../../dist/nui",
    target: "esnext",
    rollupOptions: {},
  },
  resolve: {
    alias: {
    },
  },
});
