/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Extra dev hosts (comma-separated), e.g. a preview proxy domain.
  allowedDevOrigins: ['100.95.66.22', ...(process.env.NEXT_ALLOWED_DEV_ORIGINS?.split(",") ?? [])],
  turbopack: {},
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.next/**', '**/.tmp-codex-*/**', '**/.firecrawl/**'],
      }
    }
    return config
  },
}

export default nextConfig
