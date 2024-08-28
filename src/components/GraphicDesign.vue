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
        <router-link to="/webdesign">
          <design-card
            title="WEB DESIGN"
            mobpic="/assets/home/desktop/image-web-design-small.jpg"
            tabpic="/assets/home/desktop/image-web-design-small.jpg"
            despic="/assets/home/desktop/image-web-design-small.jpg"
          ></design-card>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import DesignCard from "./additional/DesignCard.vue";
import PeachSecDesign from "./additional/PeachSecDesign.vue";
import WebDesignCard from "./additional/WebDesignCard.vue";
export default {
  components: {
    PeachSecDesign,
    WebDesignCard,
    DesignCard,
  },
};
</script>

<style scoped></style>
