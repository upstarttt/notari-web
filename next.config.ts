import type { NextConfig } from "next";

/**
 * Desactiva ESLint durante el build en Vercel para evitar errores de compilación por reglas de linting.
 */

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
