<template>
  <form class="container mt-4" @submit="handleSubmit">
    <div class="mb-3">
      <label class="form-label fw-bold">Title</label>
      <input v-model="form.title" type="text" class="form-control" />
      <div class="text-danger small">
        {{ errors.title?.[0] }}
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label fw-bold">Price ($)</label>
      <input v-model.number="form.price" type="number" class="form-control" />
      <div class="text-danger small">
        {{ errors.price?.[0] }}
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit Product</button>
  </form>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { z } from 'zod'

  const form = reactive({
    title: '',
    price: ''
  })

  const schema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    price: z.coerce.number().positive('Price must be a positive number')
  })

  const errors = ref({})

  function handleSubmit(event) {
    event.preventDefault()
    const result = schema.safeParse(form)
    if (!result.success) {
      errors.value = result.error.flatten().fieldErrors
    } else {
      errors.value = {}
      alert('Form submitted successfully!')
    }
  }
</script>