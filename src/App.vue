<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Body from "@/components/Body.vue";

</script>

<template>
  <div class="bg-basecolor w-full font-body">
    <div class="w-full h-screen hero">
      <Navbar />
      <Hero />
    </div>
    <div class="min-h-screen body  blur-2xl">
      hflflf
    </div>
  </div>
</template>

<style scoped>
.body {
  /* background: rgba(0,0,0,.5); */
  background: #08131D;
}
</style>
