<script setup>
import { ref } from 'vue';

import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Body from "@/components/Body.vue";


//State 
const bgHero = ref("bg-[url('https://images.unsplash.com/photo-1605860632725-fa88d0ce7a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')]");

</script>

<template>
  <div class="bg-basecolor w-full font-body">
    <div class="w-full h-screen bg-cover bg-center" :class="bgHero">
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
