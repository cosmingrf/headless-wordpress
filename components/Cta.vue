<template>
  <h2>{{ layout.headline }}</h2>
  <div>
    <a :href="layout.link_1.url">{{ layout.link_1.title }}</a>
    <a :href="layout.link_2.url">{{ layout.link_2.title }}</a>
  </div>
</template>

<script setup>
const props = defineProps({
  layout: Object,
});
</script>