<script setup>
import { ref } from "vue";
import { mdiArrowDown } from "@mdi/js";


</script>


<template>
  <div class="w-full flex justify-center items-center min-h-[90vh]">
    <div class="flex flex-col gap-10 w-full justify-between items-center text-white">
      <p class="text-uppercase w-[312px] md:w-[477px] 
        leading-[48px] md:leading-[68px] font-bold text-center text-[32px] md:text-5xl">
          EXPLORE BEAUTIFUL PARTS IN INDONESIA
      </p>

      <div class="w-full">
        <div class="flex justify-center">
          <button class="rounded-full p-3 border-2 border-white">
            <icon size="25" :icon="mdiArrowDown" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>