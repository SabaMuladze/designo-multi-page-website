<template>
  <peach-sec-design>
    <template #header>Graphic Design</template>
    <template #body
      >We deliver eye-catching branding materials that are tailored to meet your
      business objectives.</template
    >
  </peach-sec-design>
  <section class="design cards">
    <div
      class="flex py-20 max-w-[1111px] m-auto flex-wrap justify-center gap-6 p-6 md:flex-col md:items-center lg:flex-wrap lg:flex-row lg:px-0 lg:justify-between lg:py-[100px]"
    >
      <web-design-card
        pic="/assets/graphic-design/desktop/image-change.jpg"
        title="TIM BROWN"
        desc="A book cover designed for 
Tim Brown’s new release, ‘Change’"
      ></web-design-card>
      <web-design-card
        pic="/assets/graphic-design/desktop/image-boxed-water.jpg"
        title="BOXED WATER"
        desc="Product that lets you edit your favorite photos and videos at any time"
      ></web-design-card>
      <web-design-card
        pic="/assets/graphic-design/desktop/image-science.jpg"
        title="SCIENCE"
        desc="Get to meet your favorite internet superstar with the faceit app"
      ></web-design-card>
    </div>
  </section>
</template>

<script>
import PeachSecDesign from "./additional/PeachSecDesign.vue";
import WebDesignCard from "./additional/WebDesignCard.vue";
export default {
  components: {
    PeachSecDesign,
    WebDesignCard,
  },
};
</script>

<style scoped></style>
