<template>
  <div
    v-if="hamburger == true"
    class="absolute z-50 bg-black bg-opacity-50 w-full min-h-[100vh]"
  >
    <div class="bg-black p-10">
      <ul class="flex flex-col gap-8">
        <li>
          <router-link to="/about"
            ><h3 class="text-white font-medium">OUR COMPANY</h3></router-link
          >
        </li>
        <li>
          <router-link to="/locations"
            ><h3 class="text-white font-medium">LOCATIONS</h3></router-link
          >
        </li>
        <li>
          <router-link to="/contact"
            ><h3 class="text-white font-medium">CONTACT</h3></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
