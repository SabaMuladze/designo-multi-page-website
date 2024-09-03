<template>
  <section class="flex flex-col items-center">
    <div
      class="flex w-full flex-col gap-10 pb-20 md:px-6 sm:max-w-[690px] lg:max-w-[1111px] lg:px-0"
    >
      <div
        class="flex flex-col md:gap-5 lg:flex-row-reverse lg:justify-between"
      >
        <div>
          <img
            class="w-full h-[326px] md:rounded-lg md:hidden lg:block"
            src="
                /public/assets/locations/desktop/image-map-canada.png
            "
            alt=""
          />
          <img
            class="w-full h-[326px] md:rounded-lg max-md:hidden lg:hidden"
            src="/public/assets/locations/tablet/image-map-canada.png"
            alt=""
          />
        </div>
        <div
          class="bg-[#FDF3F0] flex flex-col gap-5 items-center max-sm:text-center py-10 md:rounded-lg md:flex-row md:pl-16 md:gap-[120px] md:items-center h-[326px] lg:w-[730px]"
        >
          <div>
            <h2 class="text-peach max-sm:text-[32px] mb-5">Canada</h2>
            <strong>Designo Central Office</strong>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div>
            <strong>Contact</strong>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:gap-5 lg:flex-row lg:justify-between">
        <div>
          <img
            class="w-full h-[326px] md:rounded-lg md:hidden lg:block"
            src="/public/assets/locations/desktop/image-map-australia.png"
            alt=""
          />
          <img
            class="w-full h-[326px] md:rounded-lg max-md:hidden lg:hidden"
            src="/public/assets/locations/tablet/image-map-canada.png"
            alt=""
          />
        </div>
        <div
          class="bg-[#FDF3F0] flex flex-col gap-5 items-center max-sm:text-center py-10 md:rounded-lg md:flex-row md:pl-16 md:gap-[120px] md:items-center h-[326px] lg:w-[730px]"
        >
          <div>
            <h2 class="text-peach max-sm:text-[32px] mb-5">Australia</h2>
            <strong>Designo AU Office</strong>
            <p>19 Balonne Street</p>
            <p>New South Wales 2443</p>
          </div>
          <div>
            <strong>Contact</strong>
            <p>P : (02) 6720 9092</p>
            <p>M : contact@designo.au</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:gap-5 lg:justify-between lg:flex-row-reverse"
      >
        <div>
          <img
            class="w-full h-[326px] md:rounded-lg md:hidden lg:block"
            src="/public/assets/locations/desktop/image-map-united-kingdom.png"
            alt=""
          />
          <img
            class="w-full h-[326px] md:rounded-lg max-md:hidden lg:hidden"
            src="/public/assets/locations/tablet/image-map-canada.png"
            alt=""
          />
        </div>
        <div
          class="bg-[#FDF3F0] flex flex-col gap-5 items-center max-sm:text-center py-10 md:rounded-lg md:flex-row md:pl-16 h-[326px] lg:w-[730px]"
        >
          <div>
            <h2 class="text-peach max-sm:text-[32px] mb-5">United Kingdom</h2>
            <strong>Designo UK Office</strong>
            <p>13 Colorado Way</p>
            <p>Rhyd-y-fro SA8 9GA</p>
          </div>
          <div>
            <strong>Contact</strong>
            <p>P : 078 3115 1400</p>
            <p>M : contact@designo.uk</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    changeLocationImg() {
      if (window.innerWidth < 768 || window.innerWidth > 1024) {
        return desktop;
      } else {
        return tablet;
      }
    },
  },
};
</script>

<style scoped></style>
