<template>
  <UContainer class="py-4 border-b border-gray-800">
    <div class="flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-green-400 hover:text-orange-500 transition-colors">
        Orangegreencat SMP
      </NuxtLink>

      <nav class="flex space-x-6 items-center">
        <NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">Home</NuxtLink>
        <NuxtLink to="/rules" class="text-gray-300 hover:text-white transition-colors">Rules</NuxtLink>
        <NuxtLink to="/laws" class="text-gray-300 hover:text-white transition-colors">Laws</NuxtLink>
        <NuxtLink to="mods" class="text-gray-300 hover:text-white transition-colors">Mods List</NuxtLink>

        <UButton 
          to="https://discord.gg/GASyt8p4jw" 
          icon="i-heroicons-paper-airplane" 
          variant="solid"
          label="Discord Login" 
          class="font-semibold"
        />
      </nav>
    </div>
  </UContainer>
</template>

<script setup lang='ts'>
// No setup script needed
</script>