<template>
  <Navbar />
  <nav-mobile></nav-mobile>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import NavMobile from "./components/NavMobile.vue";
export default {
  components: {
    Navbar,
    Footer,
    NavMobile,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
