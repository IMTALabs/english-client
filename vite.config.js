import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 80,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      src: "/src",
      component: "src/components",
      pages: "/src/pagess",
      utils: "/src/utils",
      assets: "/src/assets",
      routes: "/src/routes",
      app: "/src/app",
      features : "/src/features",
      containers : "/src/containers",

    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
      },
      compress: false,
    },
  },
});
