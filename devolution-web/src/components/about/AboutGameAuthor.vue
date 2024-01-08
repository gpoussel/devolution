<script setup lang="ts">
import IconGithub from '@/assets/svg/icon-github.svg';
import ExternalLink from '@/components/utils/ExternalLink.vue';
</script>

<template>
  <h2 class="text-lg font-semibold mt-4">Author</h2>
  <p>
    Guillaume Poussel (source code available on
    <ExternalLink target="https://github.com/gpoussel/devolution">
      <IconGithub class="inline text-inherit w-4 -mt-2 ml-1" /> GitHub</ExternalLink
    >)
  </p>
</template>
