/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "codecamp-deploy-project",
  exportPathMap: () => {
    return {
      "/": {page: "/"},
      "/board": {page: "/board"},
      "/404": {page: "/404"},
    }
  }
}

module.exports = nextConfig
