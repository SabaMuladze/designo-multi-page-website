<template>
  <section class="peach flex justify-center">
    <div
      class="h-[320px] w-full max-w-[1111px] md:h-[252px] gap-5 bg-peach flex flex-col justify-center items-center text-center sm:rounded-lg sm:m-6"
    >
      <h1 class="text-white">
        <slot name="header"></slot>
      </h1>
      <p class="text-white max-w-[400px]">
        <slot name="body"></slot>
      </p>
    </div>
  </section>
</template>
