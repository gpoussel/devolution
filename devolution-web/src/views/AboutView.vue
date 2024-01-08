<script setup lang="ts">
import IconGithub from '@/assets/svg/icon-github.svg';

const version = __APP_VERSION__;
const commit = __APP_COMMIT__;
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold">About</h1>
    <p>
      This game was developped in January 2024, for the
      <a class="text-blue hover:text-blue-200" href="https://itch.io/jam/nyigj-2024"
        >New Year Incremental Game Jam (NYIGJ) 2024</a
      >.
    </p>
    <p>
      Application version: <strong>{{ version }}</strong> ({{ commit }})
    </p>
    <h2 class="text-lg font-semibold mt-4">Author</h2>
    <p>
      Guillaume Poussel (source code available on
      <a class="text-blue hover:text-blue-200" href="https://github.com/gpoussel/devolution">
        <IconGithub class="inline text-inherit w-4 -mt-2 ml-1" /> GitHub</a
      >)
    </p>
    <h2 class="text-lg font-semibold mt-4">Credits</h2>
    <ul class="list-disc">
      <li>
        Status icons (coin, star, read heart and bug) are provided by
        <a class="text-blue hover:text-blue-200" href="https://icons8.com/">Icons8</a>.
      </li>
      <li>
        Application icons are provided by
        <a class="text-blue hover:text-blue-200" href="https://flowbite.com/icons/">Flowbite</a>.
      </li>
    </ul>
  </div>
</template>
