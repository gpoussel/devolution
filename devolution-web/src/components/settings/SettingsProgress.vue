<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import IconTrashBin from '@/assets/svg/icon-trash-bin.svg';
import SettingsProgressModal from '@/components/modal/SettingsProgressModal.vue';
import AppButton from '@/components/utils/AppButton.vue';
import { useTechnicalStore } from '@/stores/technical';

const loadModalVisible = ref(false);
const saveModalVisible = ref(false);

const technicalStore = useTechnicalStore();

function loadCompleted(argument: string | undefined) {
  loadModalVisible.value = false;
  if (argument) {
    technicalStore.loadSave(argument);
  }
}

function saveCompleted() {
  saveModalVisible.value = false;
}

function clearSave() {
  technicalStore.clearSave();
}

let saveData = ref('');
let interval = 0;
onMounted(() => {
  interval = setInterval(() => {
    saveData.value = technicalStore.getSaveData();
  }, 5);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <div class="w-1/2">
    <h2 class="text-lg font-semibold">Progress</h2>
    <p class="text-sm">This section lets you save, load, or reset your game.</p>
    <div class="flex flex-row items-start mt-4">
      <AppButton @click="loadModalVisible = true">Load</AppButton>
      <AppButton @click="saveModalVisible = true">Save</AppButton>
      <AppButton type="danger" class="flex items-center" @click="clearSave"
        ><IconTrashBin class="text-inherit w-3 mr-2" /> Hard Reset</AppButton
      >
      <SettingsProgressModal
        v-if="loadModalVisible"
        v-model.visible="loadModalVisible"
        title="Load Progress"
        button-text="Load Save"
        @done="loadCompleted"
      >
        <template #text>
          <div class="text-sm mb-4">Paste your save data below</div>
        </template>
      </SettingsProgressModal>
      <SettingsProgressModal
        v-if="saveModalVisible"
        v-model.visible="saveModalVisible"
        title="Save Progress"
        button-text="Done"
        :content="saveData"
        @done="saveCompleted"
      >
        <template #text>
          <div class="text-sm mb-4">Copy the following content and save it for future use</div>
        </template>
      </SettingsProgressModal>
    </div>
  </div>
</template>
