/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  // Keep production builds from replacing chunks used by a running dev server.
  distDir: process.env.NEXT_BUILD_DIR || (process.env.NODE_ENV === 'development' ? '.next-dev' : '.next'),
  images: { unoptimized: true },
};

export default nextConfig;
