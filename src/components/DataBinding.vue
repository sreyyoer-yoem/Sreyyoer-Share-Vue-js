
<template>
  <div>
    <h1>1. Data Binding</h1>
   <div class="container mt-5">
    <div class="card p-4 shadow-sm">
      <h4 class="mb-3">Enter Your Name</h4>
      <div class="mb-3">
        <label for="name" class="form-label">Your Name</label>
        <input
          id="name"
          type="text"
          class="form-control"
          v-model="name"
          placeholder="Type your name"
        />
      </div>
      <p class="text-muted">Hello, <strong>{{ name }}</strong>!</p>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('Sreyyoer Yoem ')
</script>