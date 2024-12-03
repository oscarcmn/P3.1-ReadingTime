import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // no olvidemos cambiar la raíz del proyecto a "src"
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
        about: resolve(__dirname, "./src/about.html"), // Otra página
        contact: resolve(__dirname, "./src/contact.html"), // Otra página
        // Añade más entradas si es necesario
      },
    },
  },
  base: "./", // Opcional: rutas relativas para mayor compatibilidad
});
