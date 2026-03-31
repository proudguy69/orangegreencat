<template>
  <UApp>
    <UBanner
    v-if="bannerState"
    :title="bannerMsg.title"
    :icon="bannerMsg.icon"
    color="secondary"
    close
    
    />
    <div class="min-h-screen bg-gray-950 text-white">
      <NuxtPage /> 
    </div>
  </UApp>
</template>

<script setup>


// const uri = {
//   dev: "https://discord.com/oauth2/authorize?client_id=1415180498648563725&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauthenticate&scope=identify+guilds.join",
//   prod: "https://discord.gg/GASyt8p4jw"
// }.prod

// provide("auth_uri", uri)

</script>
