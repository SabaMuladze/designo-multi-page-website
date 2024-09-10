<template>
  <section class="pb-[64px]">
    <div
      :class="`w-full flex justify-center sm:px-6 max-lg:text-center lg:h-[${height}] `"
    >
      <div
        :class="
          'flex flex-col w-full gap-10 sm:max-w-[690px]  sm:rounded-lg pb-10 lg:pb-0 lg:max-w-[1111px] lg:gap-0 ' +
          flex +
          ' ' +
          textCol +
          ' ' +
          bgCol
        "
      >
        <div class="lg:max-w-[476px]">
          <img
            class="md:hidden sm:rounded-t-lg w-full h-[320px]"
            :src="mobpic"
            alt=""
          />
          <img
            class="max-md:hidden sm:rounded-t-lg lg:hidden w-full h-[320px]"
            :src="tabpic"
            alt=""
          />
          <img
            :class="`max-lg:hidden ${imgRounded} w-full h-full lg:w-[476px]`"
            :src="despic"
            alt=""
          />
        </div>
        <div
          class="flex flex-col gap-5 md:px-10 px-6 lg:flex-1 lg:justify-center"
        >
          <h1 :class="'max-sm:text-[32px] ' + headCol">{{ header }}</h1>
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
    "height",
    "flex",
    "imgRounded",
  ],
};
</script>
