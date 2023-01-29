<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Body from "@/components/Body.vue";

</script>

<template>
  <div class="bg-white w-full font-body">
    <!-- Section on -->
    <div class="w-full h-screen proseries:h-[90vh] hero">
      <Navbar />
      <Hero />
    </div>
    <Body />
  </div>
</template>
