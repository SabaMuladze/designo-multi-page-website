<template>
  <div
    class="flex h-[478px] max-w-[327px] flex-col shadow-xl rounded-lg md:flex-row md:max-w-[690px] md:h-[310px]"
  >
    <div class="">
      <img class="h-[320px] md:h-full" :src="pic" alt="" />
    </div>
    <div
      class="flex h-full flex-col items-center justify-center gap-5 bg-[#FDF3F0] text-center p-6 md:w-full"
    >
      <h3 class="text-peach">{{ title }}</h3>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pic", "title", "desc"],
};
</script>

<style scoped></style>
