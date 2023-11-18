/** @satisfies {import("./app.config").AppConfig} */
const config = {
  app: {
    baseUrl: "",
    internalApiUrl: "",
  },
  next: {
    // experimental: { typedRoutes: true },
    images: {
      domains: [],
    },
    reactStrictMode: true,
  },
};

export const appConfig = config;
