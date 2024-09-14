<template>
  <div class="flex justify-center w-full" :class="paddingComputed">
    <div
      class="flex w-full px-6 flex-col lg:flex-row max-w-[1111px] lg:justify-between lg:px-0"
    >
      <div class="flex flex-col items-center gap-4">
        <img
          src="/public/assets/shared/desktop/illustration-canada.svg"
          alt=""
        />
        <h3>CANADA</h3>
        <Button class="!bg-peach hover:!bg-lightpeach text-white">
          SEE LOCATION
        </Button>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img
          src="/public/assets/shared/desktop/illustration-australia.svg"
          alt=""
        />
        <h3>AUSTRALIA</h3>
        <Button class="!bg-peach hover:!bg-lightpeach text-white">
          SEE LOCATION
        </Button>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img
          src="/public/assets/shared/desktop/illustration-united-kingdom.svg"
          alt=""
        />
        <h3>UNITED KINGDOM</h3>
        <Button class="!bg-peach hover:!bg-lightpeach text-white">
          SEE LOCATION
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  data() {
    return {
      // hover: false,
    };
  },
  components: {
    Button,
  },
  computed: {
    paddingComputed() {
      if (this.$route.path == "/about") {
        return "pb-[100px]";
      } else {
        return "";
      }
    },
    changeBg() {
      return {
        color:
          this.$route.path == "/contact" || this.$route.path == "/about"
            ? "white"
            : "black",
      };
    },
    hoverBG() {
      return {};
    },
  },
};
</script>
