export default {
  target: "static",

  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/nitro/compat",
    '@nuxtjs/composition-api/module',
    'vue2-script-setup-transform/nuxt',
  ],
};
