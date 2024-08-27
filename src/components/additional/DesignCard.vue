<template>
  <div class="relative flex flex-col justify-center items-center">
    <img class="rounded-[12px] w-[327px] h-[250px] sm:hidden" :src="mobpic" />
    <img
      class="rounded-[12px] w-[689px] h-[200px] max-sm:hidden lg:hidden"
      :src="tabpic"
    />
    <img class="rounded-[12px] max-lg:hidden" :src="despic" />

    <h2 class="absolute max-sm:text-[28px] m-auto text-white">{{ title }}</h2>
    <h3 class="absolute top-[50%] max-sm:text-[15px] pt-[20px] text-white">
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
  computed: {},
};
</script>
