
const nextConfig = {
  /* config options here */
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config;
  },
  images: {
    deviceSizes: [375, 500, 600, 700, 960, 1200], // most mobile devices are in width of 500.
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        hostname: 'static.gosugamers.net',
      },
      {
        hostname: 'static.staging.gosugamers.net',
      },
      {
        hostname: 'i.ytimg.com',
      },
      {
        hostname: 'static-cdn.jtvnw.net',
      },
    ],
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

export default nextConfig;
