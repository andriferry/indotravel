<script setup>
import { ref } from 'vue';
import { mdiArrowLeft , mdiArrowRight } from "@mdi/js";


// State 
const bgImg = ref("bg-[url('https://images.unsplash.com/photo-1631340729644-8b8aad1e9dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')]")
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
  <div class="w-full py-5 px-6 mt-16">
    <div class="flex flex-col text-white  gap-10">
      <div class="sm:flex sm:justify-between sm:items-center border-b-2 border-[#B2BCC5]">
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

      <div class="flex gap-3 flex-col">
        <span class="font-normal text-xs text-[#E7ECF0] tracking-wide leading-6">
          FEB 20, 2022
        </span>

        <p class="leading-7 font-semibold text-base ">
          Borobudur is an Indonesian monument and is one of those places one should visit before they die.
        </p>

        <div class="w-[312px] h-[200px] bg-cover bg-center rounded-xl" :class="bgImg" />

      </div>

      <div class="flex sm:hidden gap-3 w-full justify-center items-center">
        <button class="rounded-full p-2 border-2 border-white">
            <icon size="25" :icon="mdiArrowLeft" />
        </button>
        <button class="rounded-full p-2 border-2 border-white">
          <icon size="25" :icon="mdiArrowRight" />
        </button>
      </div>
    </div>
  </div>
</template>