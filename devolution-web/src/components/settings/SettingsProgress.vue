<script setup lang="ts">
import IconTrashBin from '@/assets/svg/icon-trash-bin.svg';
import AppButton from '@/components/utils/AppButton.vue';
</script>

<template>
  <div class="w-1/2">
    <h2 class="text-lg font-semibold">Progress</h2>
    <p class="text-sm">This section lets you save, load, or reset your game.</p>
    <div class="flex flex-row items-start mt-4">
      <AppButton>Load</AppButton>
      <AppButton>Save</AppButton>
      <AppButton type="danger" class="flex items-center"
        ><IconTrashBin class="text-inherit w-3 mr-2" /> Hard Reset</AppButton
      >
    </div>
  </div>
</template>
