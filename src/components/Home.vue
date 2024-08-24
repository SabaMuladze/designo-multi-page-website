<template>
  <section class="peach">
    <div class="md:p-6 md:pt-0">
      <div
        class="bg-peach h-[843px] max-w-[1440px] flex flex-col items-center overflow-hidden relative md:rounded-lg lg:flex-row lg:h-[640px] m-auto"
      >
        <div
          class="text-center max-w-[573px] p-4 flex flex-col gap-6 items-center pt-[60px] lg:pl-[100px]"
        >
          <h1 class="text-white max-sm:text-[32px] max-sm:leading-[36px]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p class="text-white">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button class="py-[17px] px-6 bg-white text-black rounded-md w-fit">
            LEARN MORE
          </button>
        </div>
        <div
          class="absolute bottom-[-120px] md:bottom-[-100px] lg:right-[100px] lg:bottom-[-10px]"
        >
          <img class="" src="/public/assets/home/desktop/phone.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="designs">
    <div class="flex flex-col gap-4 pt-20 px-6 lg:flex-row">
      <design-card
        title="WEB DESIGN"
        mobpic="/assets/home/mobile/image-web-design.jpg"
        tabpic="/assets/home/tablet/image-web-design.jpg"
        despic="/assets/home/desktop/image-web-design-large.jpg"
      ></design-card>
      <div class="flex flex-col gap-4">
        <design-card
          title="APP DESIGN"
          mobpic="/assets/home/mobile/image-app-design.jpg"
          tabpic="/assets/home/tablet/image-app-design.jpg"
          despic="/assets/home/desktop/image-app-design.jpg"
        ></design-card>
        <design-card
          title="GRAPHIC DESIGN"
          mobpic="/assets/home/mobile/image-graphic-design.jpg"
          tabpic="/assets/home/tablet/image-graphic-design.jpg"
          despic="/assets/home/desktop/image-graphic-design.jpg"
        ></design-card>
      </div>
    </div>
  </section>
</template>

<script>
import DesignCard from "./additional/DesignCard.vue";
export default {
  components: {
    DesignCard,
  },
};
</script>

<style scoped></style>
