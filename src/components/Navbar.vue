<template>
  <header class="flex justify-between px-6 py-6 lg:py-10 max-w-[1440px] m-auto">
    <div>
      <img
        class="w-[200px]"
        src="/assets/shared/desktop/logo-dark.png"
        alt=""
      />
    </div>
    <div class="sm:hidden" @click="toggleHam">
      <img
        v-if="hamburger"
        src="/assets/shared/mobile/icon-hamburger.svg"
        alt=""
      />
      <img v-else src="/assets/shared/mobile/icon-close.svg" alt="" />
    </div>
    <div class="max-sm:hidden">
      <ul class="flex gap-8">
        <li>
          <router-link to="/about"
            ><p class="text-[14px]">OUR COMPANY</p></router-link
          >
        </li>
        <li>
          <router-link to="/locations"
            ><p class="text-[14px]">LOCATIONS</p></router-link
          >
        </li>
        <li>
          <router-link to="/contact"
            ><p class="text-[14px]">CONTACT</p></router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      hamburger: true,
    };
  },
  methods: {
    toggleHam() {
      if (this.hamburger == true) {
        this.hamburger = false;
      } else {
        this.hamburger = true;
      }
    },
  },
};
</script>
