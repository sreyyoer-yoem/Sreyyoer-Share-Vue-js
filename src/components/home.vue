<template>
  <div class="container mt-5">
    <div class="input-group mb-3">
      <input
        v-model="searchQuery"
        @input="search"
        type="text"
        class="form-control"
        placeholder="Search products..."
      />
    </div>

    <div v-if="searchQuery">
      <h5>Search Results:</h5>
      <ul v-if="results.length" class="list-group">
        <li v-for="item in results" :key="item.id" class="list-group-item">
          <strong>{{ item.title }}</strong><br />
          Price: ${{ item.price }}<br />
          Description: {{ item.description }}
        </li>
      </ul>
      <p v-else class="text-muted">No results found for "{{ searchQuery }}".</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Sample data (replace with API if needed)
const products = [
  { id: 1, title: 'iPhone 14', price: 999, description: 'Latest Apple smartphone' },
  { id: 2, title: 'Samsung Galaxy S22', price: 899, description: 'Flagship Samsung phone' },
  { id: 3, title: 'Google Pixel 7', price: 799, description: 'Smartphone by Google' },
  { id: 4, title: 'Xiaomi Mi 11', price: 699, description: 'Affordable and powerful' }
]

const searchQuery = ref('')
const results = ref([])


function search() {
  const query = searchQuery.value.toLowerCase().trim()
  results.value = products.filter(product =>
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  )
}

</script>
