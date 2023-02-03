<script setup>
import { ref } from 'vue';
import { mdiArrowLeft , mdiArrowRight } from "@mdi/js";
import { Fade } from "@egjs/flicking-plugins";


//Props
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

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
      title: 'Malioboro Street',
      subtitle: 'Special Region of Yogyakarta',
      class: "bg-[url('https://images.unsplash.com/photo-1631002165167-bdfa4ac12b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]"
    },
    {
      title: 'Raja Ampat',
      subtitle: 'Raja Ampat, West Papua',
      class: "bg-[url('https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')]"
    },
    {
      title: 'Garuda Wisnu Kencana',
      subtitle: 'Jimbaran, Bali',
      class: "bg-[url('https://images.unsplash.com/photo-1641741296263-ddbc7d5f4137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80')]"
    },
    {
      title: 'Komodo Island',
      subtitle: 'East Nusa Tenggara',
      class: "bg-[url('https://images.unsplash.com/photo-1603139793104-5e880b142e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]"
    },
    {
      title: 'National Monument',
      subtitle: 'Central Jakarta',
      class: "bg-[url('https://images.unsplash.com/photo-1631683458000-32bd06cb938a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]"
    },
    {
      title: 'Mount Bromo',
      subtitle: 'Malang, East Java',
      class: "bg-[url('https://images.unsplash.com/photo-1511710348138-74156045269f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')]"
    },
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
  ]
);

</script>


<template>
  <div v-show="show" class="text-white w-100 h-100 flex flex-col items-center gap-10 justify-center p-5 mt-20 animate__animated animate__fadeInUp animate__fast ">
    <p class="text-2xl md:text-[32px] lg:text-[40px] font-semibold leading-10 md:leading-[54px] w-[312px] lg:w-[620px] sm:w-2/3 md:w-[496px] text-center">
      TAKE A LOOK THESE BEAUTIFUL SPOTS IN INDONESIA 
    </p>
    <div class="flex justify-center">
      <div class="w-[350px] sm:w-[600px] md:w-[750px] lg:w-[755px] xl:w-[1200px]">
        <Flicking ref="flicking" :options="options" :plugins="plugins">
          <div v-for="(spot, index) in spots" :key="index" :class="spot.class" class="w-[312px] h-[350px] animate__animated animate__fadeInRightBig sm:w-[160px] md:w-[213px] sm:h-[250px] md:h-[300px]
             lg:w-[282px] lg:h-[400px] mx-4 bg-cover bg-center rounded-xl">
            <div class="w-full h-full flex flex-col-reverse text-center gap-1 py-6  rounded-xl spotsLayer">
              <span class="text-xs md:text-sm lg:text-base font-normal">{{spot.subtitle}}</span>
               <p class="text-sm md:text-lg lg:text-2xl font-semibold leading-4 truncate text-center">
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