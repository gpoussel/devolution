<script setup lang="ts">
const version = __APP_VERSION__;
const commit = __APP_COMMIT__;
</script>

<template>
  <div>
    <h1 class="text-xl font-semibold">About</h1>
    <p>
      Application version: <strong>{{ version }}</strong> ({{ commit }})
    </p>
  </div>
</template>
