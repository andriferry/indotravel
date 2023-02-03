<script setup>
import { ref  } from 'vue';

defineProps({
  numberSpotVisible: {
    type: Boolean,
    default: false
  }
})

// State 
const information = ref(
  [
    {
      total: 16771,
      span: 'Total Island'
    },
    {
      total: 79,
      span: 'Total Mountains'
    },
    {
      total: 1500,
      span: 'Total Beaches'
    }, 
    {
      total: 1340,
      span: 'Total Groups and Cultures'
    }
  ]
);

</script>


<template>
  <div id="body" ref="target" class="text-white w-100 h-100 flex flex-col items-center gap-10 justify-center p-5 mt-20">
    <p class="text-2xl md:text-[32px] lg:text-[40px] font-semibold leading-10 md:leading-[54px] w-[312px] lg:w-[620px] sm:w-2/3 md:w-[496px] text-center">
      EVERY PARTS IN INDONESIA IS A BEAUTIFUL SPOTS TO EXPLORE
    </p>

    <div v-if="numberSpotVisible" class="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:w-[560px] lg:w-full lg:mt-10">
      <div class="flex flex-col text-center gap-3" v-for="(data , index) in information" :key="index">
        <p class="text-4xl leading-10 font-medium">
          <vue3-autocounter ref="counter" :startAmount='0' :duration="3" 
            :endAmount="data.total" separator="."
            :suffix="data.total > 1000 ? '+' : ''"
           />
        </p>
        <span class="text-center text-sm">
          {{data.span}}
        </span>
      </div>
    </div>
  </div>
</template>