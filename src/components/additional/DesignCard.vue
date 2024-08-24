<template>
  <div class="relative">
    <img :src="mobpic" alt="" />
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
