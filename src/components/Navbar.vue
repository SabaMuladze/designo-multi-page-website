<template>
  <header
    class="flex justify-between px-6 py-6 lg:py-10 sm:max-w-[690px] sm:px-0 lg:max-w-[1111px] m-auto lg:px-6 xl:px-0"
  >
    <div>
      <router-link @click="hamburgerFalse" to="/">
        <img
          class="w-[200px]"
          src="/assets/shared/desktop/logo-dark.png"
          alt=""
        />
      </router-link>
    </div>
    <div class="sm:hidden" @click="toggleHam">
      <img
        v-if="!hamburger"
        src="/assets/shared/mobile/icon-hamburger.svg"
        alt=""
      />
      <img v-else src="/assets/shared/mobile/icon-close.svg" alt="" />
    </div>
    <div class="max-sm:hidden">
      <ul class="flex gap-8 h-[27px]">
        <li>
          <router-link to="/about"
            ><p
              class="text-[14px] hover:border-b-[1px] hover:border-black cursor-pointer"
            >
              OUR COMPANY
            </p></router-link
          >
        </li>
        <li>
          <router-link to="/locations"
            ><p
              class="text-[14px] hover:border-b-[1px] hover:border-black cursor-pointer"
            >
              LOCATIONS
            </p></router-link
          >
        </li>
        <li>
          <router-link to="/contact"
            ><p
              class="text-[14px] hover:border-b-[1px] hover:border-black cursor-pointer"
            >
              CONTACT
            </p></router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["hamburger"]),
  },
  methods: {
    ...mapActions(["toggleHam"]),
    ...mapActions(["hamburgerFalse"]),
  },
  mounted() {
    console.log(this.hamburger);
  },
};
</script>
