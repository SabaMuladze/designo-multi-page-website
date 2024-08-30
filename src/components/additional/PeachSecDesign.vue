<template>
  <section class="peach flex justify-center">
    <div
      :style="adjustPeachSec"
      class="h-[320px] w-full max-w-[1111px] md:h-[252px] gap-5 bg-peach flex flex-col justify-center items-center text-center sm:rounded-lg sm:m-6"
    >
      <div>
        <h1 class="text-white">
          <slot name="header"></slot>
        </h1>
        <p class="text-white max-w-[400px]">
          <slot name="body"></slot>
        </p>
      </div>
      <div :style="deleteForm" class="px-6">
        <form>
          <input
            class="bg-transparent border-b-[1px] border-solid border-white py-3 w-full text-white placeholder:text-white placeholder:opacity-70 outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            class="bg-transparent border-b-[1px] border-solid border-white py-3 w-full text-white placeholder:text-white placeholder:opacity-70 outline-none"
            type="email"
            placeholder="Email Adress"
          />
          <input
            class="bg-transparent border-b-[1px] border-solid border-white py-3 w-full text-white placeholder:text-white placeholder:opacity-70 outline-none"
            type="number"
            placeholder="Phone"
          />
          <textarea
            class="bg-transparent w-full placeholder:text-white placeholder:opacity-70 outline-none border-b-[1px] border-solid border-white"
            name="Message"
            cols="20"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <div class="flex justify-center p-3">
            <Button> Submit </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Button from './Button.vue';
export default {
  components:{
    Button
  }
  computed: {
    deleteForm() {
      if (this.$route.path !== "/contact") {
        return { display: "none" };
      }
    },
    adjustPeachSec() {
      if (this.$route.path == "/contact") {
        return { minHeight: "711px" };
      }
    },
  },
};
</script>
