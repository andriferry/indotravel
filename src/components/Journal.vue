<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { ref, watch } from 'vue';
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

const articles = ref(
  [
    {
      date: 'Feb 20, 2022',
      text: 'Borobudur is an Indonesian monument and is one of those places one should visit before they die.',
      img: "bg-[url('https://images.unsplash.com/photo-1631340729644-8b8aad1e9dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')]"
    },
    {
      date: "Jan 16, 2022",
      text: "Watching the sunrise from top of Mount Batur, which is very much an active volcano.",
      img: "bg-[url('https://images.unsplash.com/photo-1616584743489-41c917198ee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')]"
    },
    {
      date: "Jan 10, 2023",
      text: "Get to know these 10+ super delicious original foods from Indonesia.",
      img: "bg-[url('https://images.unsplash.com/photo-1635809846316-bc4d0f0a0049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')]"
    },
    {
      date: "Aug 15, 2022",
      text: "Meet Raja Ampat, a world's heaven that you can only find in Indonesia.",
      img: "bg-[url('https://images.unsplash.com/photo-1570789210967-2cac24afeb00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')]"
    }
  ]
)

const flicking = ref()
const breakpoints = useBreakpoints(breakpointsTailwind)

const options = ref({
  renderOnlyVisible: true,
  defaultIndex: 0,
  circular: true,
  align: "prev"
});

//Watch
watch(breakpoints.sm, (value) => {
  if (value) options.value.align = "prev"
  else delete options.value.align
});

</script>


<template>
  <div class="w-full py-5 px-6 sm:px-10 mt-16 md:flex md:justify-center">
    <div class="flex flex-col text-white gap-10 md:w-[688px] proseriesLandscape:w-[750px] xl:w-[90%]">
      <div class="sm:flex sm:justify-between sm:items-end border-b-2 border-[#B2BCC5]">
        <p class="font-semibold leading-10 md:leading-[54px] w-[306px] md:w-[408px] xl:w-[510px] text-2xl md:text-3xl lg:text-[32px]
          xl:text-[40px]">
          SOME JOURNALS OF <br> THE BEAUTY OF INDONESIA
        </p>
        <div class="hidden sm:flex gap-3 py-2">
          <button @click="flicking.prev()" class="rounded-full p-1 md:p-2 border-2 border-white">
            <icon size="25" :icon="mdiArrowLeft" />
          </button>
          <button @click="flicking.next()" class="rounded-full p-1 md:p-2 border-2 border-white">
            <icon size="25" :icon="mdiArrowRight" />
          </button>
        </div>
      </div>
      
      <div class="flex justify-center w-full">
        <div class="w-[350px] sm:w-full">
          <Flicking ref="flicking" :options="options">
            <div class="" v-for="(data , index) in articles" :key="index">
              <div class="flex gap-3 proseriesLandscape:w-[400px] xl:w-[606px] justify-center flex-col">
                <div class="flex flex-col w-[350px] xl:w-full px-5 proseries:px-0 sm:px-2">
                  <span class="font-normal text-xs xl:text-sm text-[#E7ECF0] tracking-wide leading-6">
                    {{data.date}}
                  </span>

                  <div class="h-10 mb-10">
                    <p class="leading-7 xl:leading-9 
                      font-semibold text-base xl:text-2xl">
                      {{data.text}}
                    </p>
                  </div>
                </div>

                <div class="w-full proseries:px-2 flex justify-center sm:justify-start">
                  <div 
                    class="w-[312px] proseries:w-full sm:px-1 h-[200px] md:h-[367px] xl:h-[418px] bg-cover bg-center rounded-xl" 
                    :class="data.img" 
                  />
                </div>
              </div>
            </div>
          </Flicking>
        </div>
      </div>
        
      <div class="flex sm:hidden gap-3 w-full justify-center items-center">
        <button @click="flicking.prev()" class="rounded-full p-2 border-2 border-white">
          <icon size="25" :icon="mdiArrowLeft" />
        </button>
        <button @click="flicking.next()" class="rounded-full p-2 border-2 border-white">
          <icon size="25" :icon="mdiArrowRight" />
        </button>
      </div>
    </div>
  </div>
</template>