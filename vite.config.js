import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { env } from "vite-plugin-env";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    env({ VITE_CLIENT_ID: "aiETngi3ojJ68fyoqKbCg0rz_8-WQbp2Nitxvir-Eoc" }),
  ],
});
