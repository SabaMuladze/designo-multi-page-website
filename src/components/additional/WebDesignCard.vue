<template>
  <div class="flex flex-col shadow-xl rounded-lg">
    <div class="">
      <img class="h-[320px] rounded-t-lg" :src="pic" alt="" />
    </div>
    <div class="flex flex-col gap-5 bg-[#FDF3F0] text-center p-6 rounded-b-lg">
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
