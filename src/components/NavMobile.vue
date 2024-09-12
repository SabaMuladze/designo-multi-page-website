<template>
  <div class="absolute z-50 bg-black opacity-50 w-full min-h-[100vh]">
    <div>
      <ul class="flex flex-col gap-8">
        <li>
          <router-link to="/about"
            ><p class="text-[14px] text-white">OUR COMPANY</p></router-link
          >
        </li>
        <li>
          <router-link to="/locations"
            ><p class="text-[14px] text-white">LOCATIONS</p></router-link
          >
        </li>
        <li>
          <router-link to="/contact"
            ><p class="text-[14px] text-white">CONTACT</p></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
