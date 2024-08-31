<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center lg:flex-row lg:h-[480px]"
  >
    <div
      class="px-6 bg-peach max-w-[1111px] m-auto mx-6 mt-[-5px] lg:flex-1 md:m-0 lg:h-[480px] lg:flex lg:items-center"
    >
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
          class="bg-transparent w-full placeholder:text-white placeholder:opacity-70 outline-none border-b-[1px] border-solid border-white max-h-[100px]"
          name="Message"
          cols="10"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <div class="flex justify-center p-3">
          <Button> Submit </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from "./additional/Button.vue";
import PeachSecDesign from "./additional/PeachSecDesign.vue";
export default {
  components: {
    PeachSecDesign,
    Button,
  },
};
</script>

<style scoped></style>
