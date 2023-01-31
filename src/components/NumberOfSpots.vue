<script setup>
import { ref } from 'vue';


// State 
const information = ref(
  [
    {
      total: '17.000',
      span: 'Total Island'
    },
    {
      total: "79",
      span: 'Total Mountains'
    },
    {
      total: '1.500 +',
      span: 'Total Beaches'
    }, 
    {
      total: '1.340',
      span: 'Total Groups and Cultures'
    }
  ]
);

</script>


<template>
  <div class="text-white w-100 h-100 flex flex-col items-center gap-10 justify-center p-5 mt-20">
    <p class="text-2xl md:text-[32px] lg:text-[40px] font-semibold leading-10 md:leading-[54px] w-[312px] lg:w-[620px] sm:w-2/3 md:w-[496px] text-center">
      EVERY PARTS IN INDONESIA IS A BEAUTIFUL SPOTS TO EXPLORE
    </p>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:w-[560px] lg:w-full lg:mt-10">
      <div class="flex flex-col text-center gap-3" v-for="(data , index) in information" :key="index">
        <p class="text-4xl leading-10 font-medium">
          {{data.total}}
        </p>
        <span class="text-center text-sm">
          {{data.span}}
        </span>
      </div>
    </div>
  </div>
</template>