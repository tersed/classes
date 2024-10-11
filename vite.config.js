import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
  },
  build: {
    lib: {
      entry: "./src/classes.js",
      name: "classes",
      fileName: (format) => `classes.${format}.js`,
    },
  },
});
