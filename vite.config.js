import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const pwaPlugin = VitePWA({
  filename: "./pwa.config.js",
  manifest: {
    name: "Flash Cards", // The name of your app
    short_name: "Flash", // The short name of your app
    theme_color: "#e83283", // The theme color of your app
    background_color: "#3a8fd9", // The background color of your app
    display: "standalone", // The display mode of your app
    scope: "/", // The scope of your app
    start_url: "https://sight-words-app.web.app/", // The start URL of your app
    icons: [
      {
        src: "./favicon.png", // The path to your app icon
        sizes: [96, 128, 192, 256, 384, 512], // The sizes of your app icon
      },
    ],
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pwaPlugin],
});
