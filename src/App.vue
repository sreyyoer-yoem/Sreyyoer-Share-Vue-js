<template>
  <data-binding/>
  <computed/>
  <Parent/>
</template>

<script setup>
import DataBinding from './components/DataBinding.vue';
import computed from './components/computed.vue';
import Child from './components/Props-Emit/Child.vue';
import Parent from './components/Props-Emit/Parent.vue';
import { ref } from 'vue'
const name = ref('Vue Learner')
</script>

