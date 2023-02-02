<script setup>
import { ref } from 'vue';

import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import NumberOfSpots from "@/components/NumberOfSpots.vue";
import BeautifulSpots from "@/components/BeautifulSpots.vue";
import Journal from "@/components/Journal.vue";


//State 
const bgHero = ref("bg-[url('https://images.unsplash.com/photo-1605860632725-fa88d0ce7a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')]");

</script>

<template>
  <div class="bg-basecolor w-full font-body ">
    <div class="w-full min-h-[90vh] bg-cover bg-center" :class="bgHero">
      <div class="hero">
        <div class="secondLayer">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
    <div class="min-h-screen">
      <NumberOfSpots />
      <BeautifulSpots />
      <Journal />
    </div>
  </div>
</template>
