export default defineNuxtConfig({
  devtools: { enabled: true },
  $meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      },
    ],
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    "~/assets/scss/index.scss",
  ],
  build: {
    transpile: ["mdb-vue-ui-kit"],
  },
});
