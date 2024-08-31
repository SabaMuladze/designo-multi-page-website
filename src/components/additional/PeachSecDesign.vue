<template>
  <section class="peach flex justify-center">
    <div
      class="h-[320px] max-sm:px-6 w-full max-w-[1111px] md:h-[252px] gap-5 bg-peach flex flex-col justify-center items-center text-center sm:rounded-lg sm:m-6"
    >
      <div class="flex flex-col gap-5">
        <h1 class="text-white">
          <slot name="header"></slot>
        </h1>
        <p class="text-white">
          <slot name="body"></slot>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
