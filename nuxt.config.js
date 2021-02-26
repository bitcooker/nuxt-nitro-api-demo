export default {
  target: "static",

  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/nitro/compat"],

  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    viewer: false
  }
};
