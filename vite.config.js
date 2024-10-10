import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
  },
  build: {
    lib: {
      entry: './src/classes.js', // The main file for your package
      name: 'classes',
      fileName: (format) => `classes.${format}.js`
    }
  }
});
