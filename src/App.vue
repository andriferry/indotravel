<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Body from "@/components/Body.vue";

</script>

<template>
  <div class="bg-white w-full font-body">
    <div class="w-full h-screen hero">
      <Navbar />
      <Hero />
    </div>
    <Body />
  </div>
</template>
