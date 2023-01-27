<script setup>
import { ref } from "vue";
import { mdiMenu , mdiClose , mdiArrowDown } from "@mdi/js";


//State
const openMenu = ref(false)
const menu = ref(
  [
    {
      linkTo: '#home',
      linkName: 'Home'
    },
    {
      linkTo: '#features',
      linkName: 'Spot Amount'
    },
    {
      linkTo: '#service',
      linkName: 'Spots'
    },
    {
      linkTo: '#team',
      linkName: 'Journals'
    },
    {
      linkTo: '#testimonial',
      linkName: 'Gallery'
    },
    {
      linkTo: '#testimonial',
      linkName: 'Videos'
    },
    {
      linkTo: '#testimonial',
      linkName: 'Reviews'
    },
  ]
);

</script>


<template>
  <div class="w-full relative h-[846px] sm:h-[180vh] md:h-[768px] lg:h-screen bg-cover bg-center hero">
    <div class="flex justify-center h-full">
      <div class="container">
        <nav class="text-white p-5 relative z-20 flex items-center justify-between lg:justify-start lg:gap-44">
          <p class="title font-medium text-[24px]">Indotravel</p>

          <div class="gap-10 hidden lg:flex">
            <a href="#" v-for="(data , index) in menu" :key="index" class="text-base uppercase font-medium">
              {{data.linkName}}
            </a>
          </div>

          <button class="block lg:hidden" @click="openMenu = !openMenu">
            <icon :icon="mdiMenu" />
          </button>
        </nav>
          <!-- h-[700px] sm:h-96 md:h-[750px]  -->
        <div class="flex items-center w-full h-full">
          <div class="flex flex-col gap-10  w-full justify-between items-center text-white">
            <div>
              <p class="text-uppercase w-[312px] md:w-[477px] 
              leading-[48px] md:leading-[68px] font-bold text-center text-[32px] md:text-5xl">
                EXPLORE BEAUTIFUL PARTS IN INDONESIA
              </p>
            </div>

            <div class="w-full">
              <div class="flex justify-center">
                <button class="rounded-full p-3 border-2 border-white">
                  <icon size="25" :icon="mdiArrowDown" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


    <Transition name="slide-fade">
      <div v-if="openMenu" 
        class="h-screen p-5 absolute block lg:hidden z-50 top-10 w-full"
      >
        <div class="bg-secondarycolor transition ease-in-out delay-150 p-4 rounded-lg shadow-xl">
          <div class="flex justify-between text-white items-center">
            <p class="font-medium text-base">Main Menu</p>
            <button @click="openMenu = !openMenu">
              <icon :icon="mdiClose" />
            </button>
          </div>

          <ul class="divide-y divide-white/75">
            <li v-for="(menuItem, index) in menu" :key="index" class="text-base font-medium p-3 text-white capitalize">
              {{menuItem.linkName}} 
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

</style>