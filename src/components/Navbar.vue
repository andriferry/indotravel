<script setup>
import { ref } from "vue";
import { mdiMenu , mdiClose } from "@mdi/js";


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
  <div class="w-full flex justify-center">
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
    </div>

    <Transition name="slide-fade">
      <div v-if="openMenu" class="w-full flex justify-center absolute lg:hidden z-50 top-10">
        <div 
          class="h-screen p-5 w-full">
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
      </div>
    </Transition>
  </div>
</template>