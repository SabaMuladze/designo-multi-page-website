<template>
  <section class="peach">
    <div class="md:p-6 md:pt-0">
      <div
        class="bg-peach h-[843px] max-w-[1111px] flex flex-col items-center overflow-hidden relative md:rounded-lg lg:flex-row lg:h-[640px] m-auto"
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
          <Button>LEARN MORE</Button>
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
    <div
      class="flex flex-col gap-4 py-20 px-6 items-center justify-center lg:flex-row lg:px-0"
    >
      <router-link to="/webdesign">
        <design-card
          title="WEB DESIGN"
          mobpic="/assets/home/mobile/image-web-design.jpg"
          tabpic="/assets/home/tablet/image-web-design.jpg"
          despic="/assets/home/desktop/image-web-design-large.jpg"
        ></design-card>
      </router-link>
      <div class="flex flex-col gap-4">
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
  <section class="features">
    <div class="flex flex-col items-center text-center px-6 pb-20">
      <div class="flex flex-col gap-5 lg:flex-row max-w-[1111px]">
        <div class="flex flex-col items-center md:flex-row lg:flex-col">
          <div>
            <img
              src="/public/assets/home/desktop/illustration-passionate.svg"
              alt=""
            />
          </div>
          <div>
            <h3>PASSIONATE</h3>
            <p class="max-w-[440px]">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center md:flex-row lg:flex-col">
          <div>
            <img
              src="/public/assets/home/desktop/illustration-resourceful.svg"
              alt=""
            />
          </div>
          <div>
            <h3>RESOURCEFUL</h3>
            <p class="max-w-[440px]">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center md:flex-row lg:flex-col">
          <div>
            <img
              src="/public/assets/home/desktop/illustration-friendly.svg"
              alt=""
            />
          </div>
          <div>
            <h3>Friendly</h3>
            <p class="max-w-[440px]">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DesignCard from "./additional/DesignCard.vue";
import Button from "./additional/Button.vue";
export default {
  components: {
    DesignCard,
    Button,
  },
};
</script>

<style scoped></style>
