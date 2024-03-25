<script lang="ts" setup></script>
<template>
  <nav class="bg-gray-900 text-white py-5 border-b border-gray-700">
    <div
      class="container flex flex-col sm:flex-row justify-center gap-3 sm:gap-0 sm:justify-between items-center"
    >
      <NuxtLink to="/" class="text-2xl font-medium">CIOLPAN</NuxtLink>
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        :aria-current="item.href === current ? 'page' : undefined"
        >{{ item.name }}</a
      >
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();

const current = "http://localhost:3001" + route.fullPath;
const {
  data: navigation,
  pending,
  error,
  refresh,
} = await useFetch("http://project.dcsgroup.com.ro/wp-json/wp/v2/top-nav");
</script>

<style>
ul.nav {
  @apply flex gap-5 items-center justify-end;
}
ul.nav > li > a {
  @apply text-gray-300 hover:text-gray-50;
}
ul.nav > li > a.router-link-active {
  @apply text-primary-400;
}
</style>
