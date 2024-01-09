<script setup lang="ts">
import AboutGameAuthor from '@/components/about/AboutGameAuthor.vue';
import AboutGameDescription from '@/components/about/AboutGameDescription.vue';
import AboutLicensingDetails from '@/components/about/AboutLicensingDetails.vue';
</script>

<template>
  <div class="flex flex-col w-full items-stretch">
    <div class="flex">
      <h1 class="text-2xl font-semibold mb-4">About</h1>
    </div>
    <div class="flex flex-row">
      <div class="w-1/2">
        <AboutGameDescription />
        <AboutGameAuthor />
      </div>
      <AboutLicensingDetails />
    </div>
  </div>
</template>
