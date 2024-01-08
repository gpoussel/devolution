<script setup lang="ts">
import ExternalLink from '@/components/utils/ExternalLink.vue';
</script>

<template>
  <div class="w-1/2">
    <h2 class="text-lg font-semibold">Licensing</h2>
    <p>
      Devolution is made available under the
      <ExternalLink target="https://github.com/gpoussel/devolution/blob/main/LICENSE"
        >Apache License, version 2.0</ExternalLink
      >. Some assets have been downloaded or purchased from
      <ExternalLink target="https://itch.io">itch.io</ExternalLink>. Some of them have been edited
      from their orginal form, which is allowed under their license. If you would like to use their
      assets for your own project, then <strong>PLEASE PURCHASE IT DIRECTLY FROM THEM</strong>.
    </p>
    <ul class="list-disc ml-6">
      <li>
        Status icons (coin, star, read heart and bug) are provided by
        <ExternalLink target="https://icons8.com/">Icons8</ExternalLink>.
      </li>
      <li>
        Application icons are provided by
        <ExternalLink target="https://flowbite.com/icons/">Flowbite</ExternalLink>.
      </li>
    </ul>
  </div>
</template>
