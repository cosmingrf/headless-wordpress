export default defineNuxtConfig({
  devtools: { enabled: true },
    routes: [
      {
        path: '/',
        component: '~/pages/Home.vue',
        name: 'home',
      }
    ]

});