<template>
  <div class="flex justify-center w-full">
    <div
      class="flex w-full px-6 flex-col lg:flex-row max-w-[1111px] lg:justify-between"
    >
      <div class="flex flex-col items-center gap-4">
        <img
          src="/public/assets/shared/desktop/illustration-canada.svg"
          alt=""
        />
        <h3>CANADA</h3>
        <Button style="background-color: #e7816b; color: white">
          SEE LOCATION
        </Button>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img
          src="/public/assets/shared/desktop/illustration-australia.svg"
          alt=""
        />
        <h3>AUSTRALIA</h3>
        <Button style="background-color: #e7816b; color: white">
          SEE LOCATION
        </Button>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img
          src="/public/assets/shared/desktop/illustration-united-kingdom.svg"
          alt=""
        />
        <h3>UNITED KINGDOM</h3>
        <Button style="background-color: #e7816b; color: white">
          SEE LOCATION
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
