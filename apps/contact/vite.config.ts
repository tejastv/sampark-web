import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "contact",
      filename: "remoteEntry.js",
      exposes: {
        "./ContactApp": "./src/main.tsx",
      },
      remotes: {
        auth: "http://localhost:3003/assets/remoteEntry.js", // shared auth
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001,
  },
});
