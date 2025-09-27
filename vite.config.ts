import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

export default defineConfig(() => {
  const serverConfig: UserConfig["server"] = {};

  if (process.env.VITE_HTTPS === "true") {
    try {
      serverConfig.https = {
        key: fs.readFileSync("./localhost-key.pem"),
        cert: fs.readFileSync("./localhost.pem"),
      };
    } catch (error) {
      console.warn(
        "⚠️  HTTPS certificate files not found. Falling back to HTTP.",
        error,
      );
    }
  }

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [react(), tailwindcss()],
    server: serverConfig,
  };
});
