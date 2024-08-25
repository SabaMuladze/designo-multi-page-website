<template>
  <footer class="bg-black">
    <div
      class="flex m-auto flex-col gap-5 px-6 pt-40 pb-16 max-sm:text-center max-w-[1111px]"
    >
      <div
        class="flex flex-col items-center gap-5 sm:flex-row sm:justify-between"
      >
        <div>
          <img
            class="w-[202px] h-[27px]"
            src="/assets/shared/desktop/logo-light.png"
            alt=""
          />
        </div>
        <div class="relative sm:hidden h-[1px] w-full bg-darkgray"></div>
        <div>
          <ul class="max-sm:flex-col max-sm:gap-4 flex gap-8">
            <li>
              <router-link to="/about"
                ><p class="text-[14px] text-white">OUR COMPANY</p></router-link
              >
            </li>
            <li>
              <router-link to="/locations"
                ><p class="text-[14px] text-white">LOCATIONS</p></router-link
              >
            </li>
            <li>
              <router-link to="/contact"
                ><p class="text-[14px] text-white">CONTACT</p></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="relative max-sm:hidden h-[1px] w-full bg-darkgray"></div>
      <div class="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div>
          <strong class="text-lightgray">Designo Central Office</strong>
          <p class="text-lightgray">3886 Wellington Street</p>
          <p class="text-lightgray">Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <strong class="text-lightgray">Contact Us (Central Office)</strong>
          <br />
          <strong class="text-lightgray">P : +1 253-863-8967</strong>
          <br />
          <strong class="text-lightgray">M : contact@designo.co</strong>
        </div>
        <div class="flex gap-4 justify-center items-end">
          <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
          <img src="/assets/shared/desktop/icon-youtube.svg" alt="" />
          <img src="/assets/shared/desktop/icon-twitter.svg" alt="" />
          <img src="/assets/shared/desktop/icon-pinterest.svg" alt="" />
          <img src="/assets/shared/desktop/icon-instagram.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
