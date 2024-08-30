<template>
  <peach-sec-design>
    <template #header>Contact</template>
    <template #body
      >Ready to take it to the next level? Let’s talk about your project or idea
      and find out how we can help your business grow. If you are looking for
      unique digital experiences that’s relatable to your users, drop us a
      line.</template
    >
  </peach-sec-design>
  <section class="bg-peach px-6">
    <form>
      <input
        class="bg-transparent border-b-[1px] border-solid border-white py-3 w-full text-white placeholder:text-white"
        type="text"
        placeholder="Name"
      />
      <input
        class="bg-transparent border-b-[1px] border-solid border-white py-3 w-full text-white placeholder:text-white placeholder:opacity-70"
        type="email"
        placeholder="Email Adress"
      />
      <input
        class="bg-transparent border-b-[1px] border-solid border-white py-3 w-full text-white placeholder:text-white placeholder:opacity-70"
        type="number"
        placeholder="Phone"
      />
      <textarea
        class="bg-transparent w-full placeholder:text-white placeholder:opacity-70"
        name="Message"
        id=""
        cols="30"
        rows="10"
        placeholder="Your Message"
      ></textarea>
    </form>
  </section>
</template>

<script>
import PeachSecDesign from "./additional/PeachSecDesign.vue";
export default {
  components: {
    PeachSecDesign,
  },
};
</script>

<style scoped></style>
