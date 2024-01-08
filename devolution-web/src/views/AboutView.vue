<script setup lang="ts">
import IconGithub from '@/assets/svg/icon-github.svg';
import ExternalLink from '@/components/utils/ExternalLink.vue';

const version = __APP_VERSION__;
const commit = __APP_COMMIT__;
</script>

<template>
  <div class="flex flex-col">
    <div class="flex">
      <h1 class="text-2xl font-semibold">About</h1>
    </div>
    <div class="flex flex-row">
      <div class="w-1/2">
        <p>
          This game was developped in January 2024, for the
          <ExternalLink target="https://itch.io/jam/nyigj-2024"
            >New Year Incremental Game Jam (NYIGJ) 2024</ExternalLink
          >.
        </p>
        <p>
          Application version: <strong>{{ version }}</strong> ({{ commit }})
        </p>
        <h2 class="text-lg font-semibold mt-4">Author</h2>
        <p>
          Guillaume Poussel (source code available on
          <ExternalLink target="https://github.com/gpoussel/devolution">
            <IconGithub class="inline text-inherit w-4 -mt-2 ml-1" /> GitHub</ExternalLink
          >)
        </p>
      </div>
      <div class="w-1/2">
        <h2 class="text-lg font-semibold">Licensing</h2>
        <p>
          Devolution is made available under the
          <ExternalLink target="https://github.com/gpoussel/devolution/blob/main/LICENSE"
            >Apache License, version 2.0</ExternalLink
          >. Some assets have been downloaded or purchased from
          <ExternalLink target="https://itch.io">itch.io</ExternalLink>. Some of them have been
          edited from their orginal form, which is allowed under their license. If you would like to
          use their assets for your own project, then
          <strong>PLEASE PURCHASE IT DIRECTLY FROM THEM</strong>.
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
    </div>
  </div>
</template>
