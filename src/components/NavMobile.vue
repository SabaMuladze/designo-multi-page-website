<template>
  <div
    v-if="hamburger == true"
    class="absolute z-50 bg-black bg-opacity-50 w-full h-full sm:hidden"
  >
    <div class="bg-black p-10">
      <ul class="flex flex-col gap-8">
        <li @click="toggleHam">
          <router-link to="/about"
            ><h3 class="text-white font-medium">OUR COMPANY</h3></router-link
          >
        </li>
        <li @click="toggleHam">
          <router-link to="/locations"
            ><h3 class="text-white font-medium">LOCATIONS</h3></router-link
          >
        </li>
        <li @click="toggleHam">
          <router-link to="/contact"
            ><h3 class="text-white font-medium">CONTACT</h3></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["hamburger"]),
  },
  methods: {
    ...mapActions(["toggleHam"]),
  },
};
</script>
