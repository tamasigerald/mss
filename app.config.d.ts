import { type NextConfig } from 'next';

type AppConfig = {
  app: {
    baseUrl: string;
    cache?: Record<string, number | string>;
    internalApiUrl: string;
  };
  next: NextConfig;
};
