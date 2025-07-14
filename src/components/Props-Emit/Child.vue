<template>
  <div class="mt-4 p-3 border rounded">
    <p class="mb-2">{{ label }}</p>
    <button @click="love" class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
      ❤️ Love
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String
})

const emit = defineEmits(['loved'])

function love() {
  emit('loved') // emit event to parent
}
</script>
