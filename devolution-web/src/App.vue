<script setup lang="ts">
import DevelopmentBar from './components/global/DevelopmentBar.vue';
import MainContent from './components/global/MainContent.vue';
import TopBanner from './components/global/TopBanner.vue';
import WelcomeModal from './components/modal/WelcomeModal.vue';

const barVisible = import.meta.env.DEV;
</script>

<template>
  <TopBanner />
  <MainContent />
  <WelcomeModal />
  <DevelopmentBar v-if="barVisible" />
</template>
