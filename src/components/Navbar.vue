<template>
  <header class="flex justify-between pb-5">
    <div>
      <img
        class="w-[200px]"
        src="/assets/shared/desktop/logo-dark.png"
        alt=""
      />
    </div>
    <div @click="toggleHam">
      <img
        v-if="hamburger"
        src="/assets/shared/mobile/icon-hamburger.svg"
        alt=""
      />
      <img v-else src="/assets/shared/mobile/icon-close.svg" alt="" />
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
