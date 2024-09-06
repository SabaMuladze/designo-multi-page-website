<template>
  <section>
    <div :class="`w-full flex justify-center ` + textCol + ' ' + bgCol">
      <div class="max-w-[1111px]">
        <div>
          <img class="md:hidden" :src="mobpic" alt="" />
          <img class="max-md:hidden lg:hidden" :src="tabpic" alt="" />
          <img class="max-lg:hidden" :src="despic" alt="" />
        </div>
        <div>
          <h1 :class="'' + headCol">{{ header }}</h1>
          <p>{{ desc }}</p>
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
