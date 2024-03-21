<template>
  Asta e navigatia
  <div>
    <a
      v-for="item in navigation"
      :key="item.name"
      :href="item.href"
      :aria-current="item.href === current ? 'page' : undefined"
      >{{ item.name }}</a
    >
  </div>
</template>

<script setup>
const route = useRoute();

const current = "http://localhost:3000" + route.fullPath;
const {
  data: navigation,
  pending,
  error,
  refresh,
} = await useFetch("http://project.dcsgroup.com.ro/wp-json/wp/v2/top-nav");
</script>