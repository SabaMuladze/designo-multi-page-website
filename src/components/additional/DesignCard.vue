<template>
  <div class="relative flex flex-col justify-center items-center">
    <img
      class="rounded-[12px] w-[327px] h-[250px] sm:hidden z-10"
      :src="mobpic"
    />
    <img
      class="rounded-[12px] w-[689px] h-[200px] max-sm:hidden lg:hidden z-10"
      :src="tabpic"
    />
    <img class="rounded-[12px] max-lg:hidden z-10" :src="despic" />

    <h2 class="absolute max-sm:text-[28px] m-auto text-white z-20">
      {{ title }}
    </h2>
    <h3 class="absolute top-[50%] max-sm:text-[15px] pt-[20px] text-white z-20">
      VIEW PROJECTS
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title", "mobpic", "tabpic", "despic"],
};
</script>

<style scoped>
.relative:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffad9b; /* Peach color */
  opacity: 0.5; /* Adjust as needed */
  z-index: 11; /* Ensure it is below other content */
  border-radius: 12px;
}
</style>
