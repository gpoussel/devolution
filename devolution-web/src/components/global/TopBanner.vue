<template>
  <header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200">
    <div class="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-7xl lg:px-4">
      <div class="flex items-center">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="flex">
            <img src="../../assets/devolution/logo.png" class="h-8 mr-3" alt="Devolution Logo" />
            <span class="self-center text-2xl font-bold whitespace-nowrap text-green"
              >Devolution</span
            >
          </RouterLink>
        </div>
      </div>
      <div class="flex items-center space-x-6">
        <div class="flex w-20">
            <img src="../../assets/icons/icons8-coin-96.png" class="h-7 mr-1" />
            <span class="self-center whitespace-nowrap">12</span>
        </div>
        <div class="flex w-20">
            <img src="../../assets/icons/icons8-star-96.png" class="h-7 mr-1" />
            <span class="self-center whitespace-nowrap">12345</span>
        </div>
        <div class="flex w-20">
            <img src="../../assets/icons/icons8-red-heart-96.png" class="h-7 mr-1" />
            <span class="self-center whitespace-nowrap">12345</span>
        </div>
        <div class="flex w-20">
            <img src="../../assets/icons/icons8-lady-beetle-96.png" class="h-7 mr-1" />
            <span class="self-center whitespace-nowrap">12345</span>
        </div>
      </div>
      <div class="flex items-center">
        <ul class="flex-col pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex">
          <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
            <RouterLink to="" class="text-sm font-medium text-dark-900 hover:text-green"
              >Settings</RouterLink
            >
          </li>
          <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
            <RouterLink to="/about" class="text-sm font-medium text-dark-900 hover:text-green"
              >About</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
