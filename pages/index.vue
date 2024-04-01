<template>
  <div v-if="page" class="page">
    <h1>{{ page.title.rendered }}</h1>
    <div v-if="page.content" v-html="page.content.rendered"></div>
    <template v-for="layout in page.acf.flexible">
      <Flexible :layout="layout" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import useWpApi from "~~/composables/useWpApi";

const slug = "home";
const { data: pages } = await useWpApi().getPageBySlug(slug);
const page = pages.value?.[0];

useHead({
  title: page?.title.rendered,
});
</script>
