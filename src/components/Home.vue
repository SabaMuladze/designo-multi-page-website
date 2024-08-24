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
    <div>
      <design-card
        title="WEB DESIGN"
        mobpic="/assets/home/mobile/image-web-design.jpg"
        tabpic="/assets/home/tablet/image-web-design.jpg"
        despic="/assets/home/desktop/image-web-design.jpg"
      ></design-card>
      <div>
        <div></div>
        <div></div>
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
