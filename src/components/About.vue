<template>
  <about-seciton
    mobpic="./assets/about/mobile/image-about-hero.jpg"
    tabpic="./assets/about/tablet/image-about-hero.jpg"
    despic="./assets/about/mobile/image-about-hero.jpg"
    header="About Us"
    desc="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
    textCol="text-white"
    bgCol="bg-peach"
    headCol="text-white"
  ></about-seciton>
</template>

<script>
import AboutSeciton from "./additional/AboutSection.vue";
export default {
  components: {
    AboutSeciton,
  },
};
</script>

<style scoped></style>
