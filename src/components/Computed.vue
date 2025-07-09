<template>
    <h1 class="text-xl font-semibold my-5">2. Computed</h1>
     <div class="container mt-5">
    <div class="card shadow-sm p-4">
      <h4 class="mb-3">Total Price Calculator</h4>

      <div class="row align-items-center mb-3">
        <div class="col-5">
          <label class="form-label">Price per Item ($)</label>
          <input v-model="price" type="number" class="form-control" placeholder="Enter price" />
        </div>
        <div class="col-2 text-center pt-4">
          <button class="btn btn-outline-secondary" disabled>x</button>
        </div>

        <div class="col-5">
          <label class="form-label">Quantity</label>
          <input v-model="quantity" type="number" class="form-control" placeholder="Enter quantity" />
        </div>
      </div>

      <hr />

      <div class="text-end fs-5">
        👉 <strong>Total:</strong> ${{ totalPrice }}
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const price = ref(0)
    const quantity = ref(1)

    // 💡 Computed total
    const totalPrice = computed(() => {
        return (price.value * quantity.value).toFixed(2)
    })
</script>