<script setup>
import { ref } from 'vue';


// State 
const information = ref(
  [
    {
      total: '18.000',
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
    <p class="text-2xl font-semibold leading-10 w-[312px] sm:w-2/3 text-center">
      EVERY PARTS IN INDONESIA IS A BEAUTIFUL SPOTS TO EXPLORE
    </p>

    <div class="grid grid-cols-2 gap-8 px-4">
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