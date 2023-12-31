<template>
  <div class="flex gap-8 w-full">
    <div class="w-8/12 h-full grid grid-cols-2 gap-3">
      <div
        class="flex items-center col-span-1 bg-black rounded-md px-4 pt-2 pb-4 border border-2 border-transparent hover:border-white hover:cursor-pointer"
        v-for="n in 10"
        :key="n"
      >
        <div class="w-8/12">
          <p class="font-bold text-xl">Code</p>
          <p>Develop new features</p>
        </div>
        <div class="w-4/12 flex flex-row text-right">
          <div class="grow"></div>
          <img src="../assets/icons/icons8-coin-96.png" class="h-6 mr-1" />
          <span class="self-center whitespace-nowrap">+1&#120148;/s</span>
        </div>
      </div>
    </div>
    <div class="w-4/12 h-full">
      <!-- TODO: Remove this placeholder text -->
      Enim consequat do dolore. Dolore qui adipisicing reprehenderit non eu ex dolore mollit elit
      dolore. Pariatur consectetur velit elit laborum elit ea ut deserunt veniam excepteur aliqua
      amet. Sunt id cillum irure sunt eiusmod anim duis adipisicing anim aliqua deserunt sint minim
      culpa nostrud. Ipsum pariatur excepteur proident proident laborum. Laborum ad anim id non qui
      sit non sint. Esse aliquip magna esse velit. Nostrud exercitation sunt in nulla ad laborum
      aliquip minim laborum voluptate proident excepteur. Tempor consectetur sit nostrud sint et
      tempor. Dolor nostrud aliquip culpa eiusmod mollit consequat irure minim Lorem enim aute
      occaecat occaecat ea. Officia voluptate officia ea fugiat ipsum reprehenderit ut do laboris.
    </div>
  </div>
</template>
