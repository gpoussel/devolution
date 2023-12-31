<script setup lang="ts">
import MainContent from './components/global/MainContent.vue';
import TopBanner from './components/global/TopBanner.vue';
import WelcomeModal from './components/modal/WelcomeModal.vue';
</script>

<template>
  <TopBanner />
  <MainContent />

  <!-- TODO: Display the modal only on the first launch -->
  <WelcomeModal :visible-on-load="true" />
</template>
