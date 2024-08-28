<template>
  <peach-sec-design>
    <template #header>App Design</template>
    <template #body
      >Our mobile designs bring intuitive digital solutions to your customers
      right at their fingertips.</template
    >
  </peach-sec-design>
  <section class="design cards">
    <div
      class="flex py-20 max-w-[1111px] m-auto flex-wrap justify-center gap-6 p-6 md:flex-col md:items-center lg:flex-wrap lg:flex-row lg:px-0 lg:justify-between lg:py-[100px]"
    >
      <web-design-card
        pic="/assets/app-design/desktop/image-airfilter.jpg"
        title="AIRFILTER"
        desc="Solving the problem of poor indoor air quality by filtering the air"
      ></web-design-card>
      <web-design-card
        pic="/assets/app-design/desktop/image-eyecam.jpg"
        title="EYECAM"
        desc="Product that lets you edit your favorite photos and videos at any time"
      ></web-design-card>
      <web-design-card
        pic="/assets/app-design/desktop/image-faceit.jpg"
        title="FACEIT"
        desc="Get to meet your favorite internet superstar with the faceit app"
      ></web-design-card>
      <web-design-card
        pic="/assets/app-design/desktop/image-loopstudios.jpg"
        title="LOOPSTUDIOS"
        desc="A VR experience app made for Loopstudios"
      ></web-design-card>
      <web-design-card
        pic="/assets/app-design/desktop/image-todo.jpg"
        title="TODO"
        desc="A todo app that features cloud sync with light and dark mode"
      ></web-design-card>
    </div>
  </section>
  <section class="designs">
    <div
      class="flex flex-col gap-4 py-20 px-6 items-center justify-center lg:flex-row lg:px-0"
    >
      <div class="flex flex-col gap-4 lg:flex-row">
        <router-link to="/webdesign">
          <design-card
            title="WEB DESIGN"
            mobpic="/assets/home/desktop/image-web-design-small.jpg"
            tabpic="/assets/home/desktop/image-web-design-small.jpg"
            despic="/assets/home/desktop/image-web-design-small.jpg"
          ></design-card>
        </router-link>
        <router-link to="/graphicdesign">
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
