<script setup lang="ts">
import DevelopmentToolbox from './components/global/DevelopmentToolbox.vue';
import MainContent from './components/global/MainContent.vue';
import TopBanner from './components/global/TopBanner.vue';
import WelcomeModal from './components/modal/WelcomeModal.vue';

const toolboxVisible = import.meta.env.DEV;
</script>

<template>
  <TopBanner />
  <MainContent />
  <WelcomeModal />
  <DevelopmentToolbox v-if="toolboxVisible" />
</template>
