<script setup>
import { ref } from 'vue';
import { mdiArrowLeft , mdiArrowRight } from "@mdi/js";
import { Perspective , Fade } from "@egjs/flicking-plugins";


// State 
const flicking = ref()
const plugins = ref([
  new Fade()
])
const options = ref({
  renderOnlyVisible: true,
  circular: true,
  defaultIndex: 1,
})

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
    },
    {
      title: 'Toba Lake',
      subtitle: 'North Sumatra',
      class: "bg-[url('https://images.unsplash.com/photo-1586703449297-0618fa522ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80')]"
    },
     {
      title: 'Toba Lake',
      subtitle: 'North Sumatra',
      class: "bg-[url('https://images.unsplash.com/photo-1586703449297-0618fa522ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80')]"
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
  <div class="text-white w-100 h-100 flex flex-col items-center gap-10 justify-center p-5 mt-20">
    <p class="text-2xl md:text-[32px] lg:text-[40px] font-semibold leading-10 md:leading-[54px] w-[312px] lg:w-[620px] sm:w-2/3 md:w-[496px] text-center">
      TAKE A LOOK THESE BEAUTIFUL SPOTS IN INDONESIA
    </p>

      <!-- <div class="grid grid-cols-2 w-full gap-8">
          <div v-for="spot, index in spots" :key="index" :class="spot.class" class="w-[148px] h-[220px] bg-cover bg-center rounded-xl">
            <div class="w-full h-full flex flex-col-reverse text-center gap-1 py-6  rounded-xl spotsLayer">
              <span class="text-xs font-normal">{{spot.subtitle}}</span>
               <p class="text-sm font-semibold leading-4 truncate text-center">
                {{spot.title}}
              </p>
            </div>
          </div>
      </div> -->

    <div class="flex justify-center">
      <div class="w-[350px] sm:w-[600px] md:w-[750px] lg:w-[755px]">
        <Flicking ref="flicking" :options="options" :plugins="plugins">
          <div v-for="spot, index in spots" :key="index" :class="spot.class" class="w-[300px] sm:w-[160px] md:w-[213px] lg:w-[282px] h-[220px] mx-4 bg-cover bg-center rounded-xl">
            <div class="w-full h-full flex flex-col-reverse text-center gap-1 py-6  rounded-xl spotsLayer">
              <span class="text-xs font-normal">{{spot.subtitle}}</span>
               <p class="text-sm font-semibold leading-4 truncate text-center">
                {{spot.title}}
              </p>
            </div>
          </div>
        </Flicking>
      </div>
    </div>

    <div class="w-full flex gap-10 justify-center">
      <button @click="flicking.prev()" class="flex gap-3 uppercase text-base font-normal">
        <icon :icon="mdiArrowLeft" />
        previous
      </button>
      <button @click="flicking.next()" class="flex gap-3 uppercase text-base font-normal">
        next
         <icon :icon="mdiArrowRight" />
      </button>
    </div>
  </div>
</template>