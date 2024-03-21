<template>
  <TopNav />
  <template v-for="layout in data[0].acf.flexible">
    <Flexible :layout="layout" />
  </template>
</template>

<script setup>
import TopNav from "~/components/TopNav.vue";
import { ref } from "vue";
import Flexible from "~/components/Flexible.vue";
const route = useRoute();
const slug = ref();

if (route.params.slug) {
  let lastIndex = route.params.slug.length - 1;
  if (route.params.slug[lastIndex]) {
    slug.value = route.params.slug[lastIndex - 1];
  } else {
    slug.value = route.params.slug[lastIndex];
  }
} else {
  slug.value = "home";
}

const { data, pending, error, refresh } = useFetch(
  "https://project.dcsgroup.com.ro/wp-json/wp/v2/pages",
  {
    query: { slug: slug.value || "home" },
  }
);
</script>