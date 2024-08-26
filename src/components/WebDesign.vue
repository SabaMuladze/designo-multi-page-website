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
  <section class="design cards">
    <div
      class="flex py-20 max-w-[1111px] m-auto flex-wrap justify-center gap-6 p-6 md:flex-col md:items-center lg:flex-wrap lg:flex-row lg:px-0 lg:justify-between lg:py-[100px]"
    >
      <web-design-card
        pic="/assets/web-design/desktop/image-express.jpg"
        title="EXPRESS"
        desc="A multi-carrier shipping website for ecommerce businesses"
      ></web-design-card>
      <web-design-card
        pic="/assets/web-design/desktop/image-transfer.jpg"
        title="TRANSFER"
        desc="Site for low-cost money transfers and sending money within seconds"
      ></web-design-card>
      <web-design-card
        pic="/assets/web-design/desktop/image-photon.jpg"
        title="PHOTON"
        desc="A state-of-the-art music player with high-resolution audio and DSP effects"
      ></web-design-card>
      <web-design-card
        pic="/assets/web-design/desktop/image-builder.jpg"
        title="BUILDER"
        desc="Connects users with local contractors based on their location"
      ></web-design-card>
      <web-design-card
        pic="/assets/web-design/desktop/image-blogr.jpg"
        title="BLOGR"
        desc="Blogr is a platform for creating an online blog or publication"
      ></web-design-card>
      <web-design-card
        pic="/assets/web-design/desktop/image-camp.jpg"
        title="CAMP"
        desc="Get expert training in coding, data, design, and digital marketing"
      ></web-design-card>
    </div>
  </section>
  <section class="designs">
    <div
      class="flex flex-col gap-4 py-20 px-6 items-center justify-center lg:flex-row lg:px-0"
    >
      <div class="flex flex-col gap-4 lg:flex-row">
        <router-link to="/appdesign">
          <design-card
            title="APP DESIGN"
            mobpic="/assets/home/mobile/image-app-design.jpg"
            tabpic="/assets/home/tablet/image-app-design.jpg"
            despic="/assets/home/desktop/image-app-design.jpg"
          ></design-card>
        </router-link>
        <router-link to="/graphic design">
          <design-card
            title="GRAPHIC DESIGN"
            mobpic="/assets/home/mobile/image-graphic-design.jpg"
            tabpic="/assets/home/tablet/image-graphic-design.jpg"
            despic="/assets/home/desktop/image-graphic-design.jpg"
          ></design-card>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import DesignCard from "./additional/DesignCard.vue";
import WebDesignCard from "./additional/WebDesignCard.vue";
export default {
  components: {
    WebDesignCard,
    DesignCard,
  },
};
</script>

<style scoped></style>
