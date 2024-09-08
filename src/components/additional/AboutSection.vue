<template>
  <section>
    <div :class="`w-full flex justify-center max-lg:text-center  `">
      <div :class="'max-w-[690px] lg:max-w-[1111px]' + textCol + ' ' + bgCol">
        <div>
          <img class="md:hidden w-full h-[320px]" :src="mobpic" alt="" />
          <img
            class="max-md:hidden lg:hidden w-full h-[320px]"
            :src="tabpic"
            alt=""
          />
          <img class="max-lg:hidden w-full" :src="despic" alt="" />
        </div>
        <div>
          <h1 :class="'' + headCol">{{ header }}</h1>
          <p :class="textCol">{{ desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "mobpic",
    "tabpic",
    "despic",
    "header",
    "desc",
    "textCol",
    "bgCol",
    "headCol",
  ],
};
</script>
