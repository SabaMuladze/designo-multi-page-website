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
    height="480px"
    flex="lg:flex-row-reverse"
    imgRounded="rounded-r-lg"
    desc2=""
  ></about-seciton>
  <about-seciton
    mobpic="./assets/about/mobile/image-world-class-talent.jpg"
    tabpic="./assets/about/tablet/image-world-class-talent.jpg"
    despic="./assets/about/desktop/image-world-class-talent.jpg"
    header="World-class talent"
    desc="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
    textCol="text-black"
    bgCol="bg-[#FDF3F0]"
    headCol="text-peach"
    height="640px"
    picWidth=""
    flex="lg:flex-row"
    imgRounded="rounded-l-lg"
    desc2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
  ></about-seciton>
  <see-location-cards></see-location-cards>
</template>

<script>
import AboutSeciton from "./additional/AboutSection.vue";
import SeeLocationCards from "./additional/SeeLocationCards.vue";
export default {
  components: {
    AboutSeciton,
    SeeLocationCards,
  },
};
</script>

<style scoped></style>
