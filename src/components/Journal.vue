<script setup>
import { ref } from 'vue';
import { mdiArrowLeft , mdiArrowRight } from "@mdi/js";


// State 
const spots = ref(
  [
    {
      title: 'Borobudur Temple',
      subtitle: 'Magelang, Central Java',
      class: "bg-[url('https://images.unsplash.com/photo-1596402184320-417e7178b2cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')]"
    },
    {
      title: 'Toba Lake',
      subtitle: 'North Sumatra',
      class: "bg-[url('https://images.unsplash.com/photo-1586703449297-0618fa522ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80')]"
    }
  ]
);

</script>


<template>
  <div class="w-full py-5 px-6">
    <div class="grid text-white grid-rows-4 grid-flow-col gap-4">
      <div class="flex justify-between items-center border-b-2 border-[#B2BCC5] pb-3">
        <p class="font-semibold leading-10 w-[306px] text-2xl">
          SOME JOURNALS OF <br> THE BEAUTY OF INDONESIA
        </p>
        <div class="hidden sm:flex gap-3">
           <button class="rounded-full p-2 border-2 border-white">
            <icon size="25" :icon="mdiArrowLeft" />
          </button>
           <button class="rounded-full p-2 border-2 border-white">
            <icon size="25" :icon="mdiArrowRight" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>