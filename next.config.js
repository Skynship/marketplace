const { i18n } = require("./next-i18next.config");

// TODO: comment out async redirects if countdown is present and enabled
module.exports = {
  i18n,
  devIndicators: {},
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    currency: "USD",
  },
  images: {
      domains: ['cdn.shopify.com'],
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'cdn.shopify.com'
          },
      ]
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/checkout',
  //       destination: '/404',
  //       permanent: true,
  //     },
  //     {
  //       source: '/payment',
  //       destination: '/404',
  //       permanent: true,
  //     },
  //     {
  //       source: '/product/:slug*',
  //       destination: '/404',
  //       permanent: true,
  //     },
  //   ]
  // },
};