<template>
  <TopNav />
  <template v-for="layout in data[0].acf.flexible">
    <Flexible :layout="layout" />
  </template>
</template>

<script setup>
import { ref } from "vue";
import Flexible from "~/components/Flexible.vue";
const route = useRoute();
const slug = ref();

slug.value = "about";

const { data, pending, error, refresh } = useFetch(
  "https://project.dcsgroup.com.ro/wp-json/wp/v2/pages",
  {
    query: { slug: slug.value },
  }
);
</script>