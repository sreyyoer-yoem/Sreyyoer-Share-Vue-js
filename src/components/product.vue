<template>
  <div class="container mt-5">
    <h2 class="mb-4">Product List</h2>
    <div class="row">
      <div
        class="col-md-3 mb-4" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <img :src="product.thumbnail" class="card-img-top" alt="Product Image" style="height: 180px; object-fit: cover;"/>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text description-clamp">{{ product.description }}</p>
            <strong class="mt-auto">${{ product.price }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const products = ref([])

onMounted(async () => {
  const res = await axios.get('https://dummyjson.com/products')
  products.value = res.data.products
})
</script>

<!-- <script setup>
import axios from "axios";
import { ref } from "vue";
const products = ref([]);

const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  products.value = res.data.products;
};

fetchProducts(); // called immediately
</script> -->

<style scoped>
.description-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
}
</style>
