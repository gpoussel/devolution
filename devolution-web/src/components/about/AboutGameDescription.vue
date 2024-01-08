<script setup lang="ts">
import ExternalLink from '@/components/utils/ExternalLink.vue';

const version = __APP_VERSION__;
const commit = __APP_COMMIT__;
</script>

<template>
  <p>
    This game was developped in January 2024, for the
    <ExternalLink target="https://itch.io/jam/nyigj-2024"
      >New Year Incremental Game Jam (NYIGJ) 2024</ExternalLink
    >.
  </p>
  <p>
    Application version: <strong>{{ version }}</strong> ({{ commit }})
  </p>
</template>
