<template>
  <section class="peach flex justify-center">
    <div
      class="h-[320px] w-full max-w-[1111px] md:h-[252px] gap-5 bg-peach flex flex-col justify-center items-center text-center sm:rounded-lg sm:m-6"
    >
      <h1 class="text-white">Web Design</h1>
      <p class="text-white max-w-[400px]">
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </p>
    </div>
  </section>
  <section class="p-6">
    <web-design-card
      pic="/assets/web-design/desktop/image-express.jpg"
      title="EXPRESS"
      desc="A multi-carrier shipping website for ecommerce businesses"
    ></web-design-card>
    <web-design-card
      pic="/assets/web-design/desktop/image-express.jpg"
      title="EXPRESS"
      desc="A multi-carrier shipping website for ecommerce businesses"
    ></web-design-card>
    <web-design-card
      pic="/assets/web-design/desktop/image-express.jpg"
      title="EXPRESS"
      desc="A multi-carrier shipping website for ecommerce businesses"
    ></web-design-card>
    <web-design-card
      pic="/assets/web-design/desktop/image-express.jpg"
      title="EXPRESS"
      desc="A multi-carrier shipping website for ecommerce businesses"
    ></web-design-card>
    <web-design-card
      pic="/assets/web-design/desktop/image-express.jpg"
      title="EXPRESS"
      desc="A multi-carrier shipping website for ecommerce businesses"
    ></web-design-card>
  </section>
</template>

<script>
import WebDesignCard from "./additional/WebDesignCard.vue";
export default {
  components: {
    WebDesignCard,
  },
};
</script>

<style scoped></style>
