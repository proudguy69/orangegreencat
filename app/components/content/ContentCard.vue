<template>
  <UCard class="bg-gray-800/50 hover:bg-gray-800 transition-colors p-4">
    <div class="flex items-start">
      <UIcon :name="icon" class="w-8 h-8 mr-4" :class="`text-${color}-400`" />
      <div>
        <h3 class="text-2xl font-semibold text-white mb-2">{{ title }}</h3>
        <p class="text-gray-300">{{ description }}</p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang='ts'>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'white'
  }
})
</script>