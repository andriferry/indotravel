<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Features from "@/components/Features.vue";
import Service from "@/components/Service.vue";
import Team from "@/components/Team.vue";
import Testimonial from "@/components/Testimonial.vue";
import Form from "@/components/Form.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="bg-white w-full font-body">
    <!-- Section on -->
    <div class="w-full h-screen proseries:h-[90vh] hero">
      <Navbar />
      <Hero />
    </div>

    <!-- <Hero /> -->
    <!-- <Features />
    <Service />
    <Team />
    <Testimonial />
    <Form />
    <Footer /> -->
  </div>
</template>
