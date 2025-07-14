<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">3.Props and Emit</h1>
    <ChildComponent :label="'Add love emoji!'" @loved="handleLove" />
    <p class="mt-4 text-green-600">Total Love: {{ loveCount }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './Child.vue'

const loveCount = ref(0)

function handleLove() {
  loveCount.value++
}
</script>
