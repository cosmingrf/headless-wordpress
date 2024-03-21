<template>
  <div>{{ layout.title }}</div>
  <p>{{ layout.subtitle }}</p>
</template>

<script setup>
const props = defineProps({
  layout: Object,
});
</script>