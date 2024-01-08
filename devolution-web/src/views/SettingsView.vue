<script setup lang="ts">
import SettingsProgress from '@/components/settings/SettingsProgress.vue';
import SettingsUserPreferences from '@/components/settings/SettingsUserPreferences.vue';
</script>

<template>
  <div class="flex flex-col w-full items-stretch">
    <div class="flex">
      <h1 class="text-2xl font-semibold mb-4">Settings</h1>
    </div>
    <div class="flex flex-row">
      <SettingsProgress />
      <SettingsUserPreferences />
    </div>
  </div>
</template>
