<script setup lang="ts">
import IconCog from '@/assets/svg/icon-cog.svg';
import IconHome from '@/assets/svg/icon-home.svg';
import IconInfo from '@/assets/svg/icon-info.svg';

import ApplicationLink from './ApplicationLink.vue';
</script>

<template>
  <div class="flex items-center">
    <ul class="flex-col pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex">
      <ApplicationLink route="/"><IconHome class="w-4 text-inherit" /></ApplicationLink>
      <ApplicationLink route="/about"><IconInfo class="w-4 text-inherit" /></ApplicationLink>
      <ApplicationLink route="/settings"><IconCog class="w-4 text-inherit" /></ApplicationLink>
    </ul>
  </div>
</template>
