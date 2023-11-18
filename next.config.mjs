import { appConfig } from "./app.config.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...appConfig.next,
};

export default nextConfig;
