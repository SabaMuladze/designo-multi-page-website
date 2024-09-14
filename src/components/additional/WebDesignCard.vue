<template>
  <div
    class="flex h-[478px] max-w-[327px] flex-col shadow-xl rounded-lg md:flex-row md:max-w-[690px] md:h-[310px] lg:flex-col lg:h-[478px] lg:max-w-[327px]"
  >
    <div class="">
      <img class="h-[320px] md:h-full" :src="pic" alt="" />
    </div>
    <div
      class="group flex h-full flex-col items-center rounded-b-lg md:rounded-r-lg md:rounded-l-none lg:rounded-r-none lg:!rounded-b-lg justify-center gap-5 bg-[#FDF3F0] hover:bg-peach text-center p-6 md:w-full"
    >
      <h3 class="text-peach group-hover:text-white">{{ title }}</h3>
      <p class="group-hover:text-white">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pic", "title", "desc"],
};
</script>

<style scoped></style>
