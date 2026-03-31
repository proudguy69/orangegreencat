<template>
  <SmpHeader />
  <div>
    <UPageSection
    description="A fabric modded experience with a custom coded mod that adds features to enhance the vanilla experniance and bring flavor back to SMPs"
    >
    <template #title>
        Welcome to the <span class="text-orange-400">Orange</span><span class="text-green-400">green</span><span class="text-yellow-300">cat</span>  SMP 
    </template>

    <div class="flex justify-center">
        <UPageCard
        title="Connect to the server"
        variant="soft"
        highlight
        icon="i-heroicons-globe-alt"
        class="w-md"
        description="Java 1.21.11"
        >

        <UFieldGroup>
            <UInput
            icon="i-heroicons-server"
            v-model="serverIp"
            disabled
            class="text-center"
            />
            <UButton
            label="Copy Ip"
            icon="i-heroicons-clipboard-document"
            @click="copyIP"
            />
        </UFieldGroup>

        </UPageCard>
    </div>

    </UPageSection>

    <UPageSection class="mt-0" title="Key Features & Mods">      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UPageCard 
          icon="i-heroicons-microphone"
          title="Simple Voice Chat"
          description="Proximity voice chat makes meeting other players more immersive and fun."
          color="orange"
          highlight
          spotlight
        />
        <UPageCard 
          icon="i-heroicons-map-pin"
          title="Enhanced World Generation"
          description="Added 50+ new vanilla-esk biomes that adds more building blocks for all the crafters out there"
          highlight
          spotlight
        />
        <UPageCard 
          icon="i-heroicons-puzzle-piece"
          title="Custom coded mod"
          description="We made a custom coded mod that adds drugs, and other core features to ehance player interaction, to make this smp be *multiplayer* and not feel like singleplayer"
          highlight
          spotlight
        />
      </div>
    </UPageSection>
  </div>
</template>

<script setup lang='ts'>
import SmpHeader from '~/components/SmpHeader.vue';


const toast = useToast()
const serverIp = 'smp.orangegreencat.com';

const copyIP = () => {
  navigator.clipboard.writeText(serverIp);
  
  toast.add({
    title: 'Copied!',
    description: `The IP (${serverIp}) has been copied to your clipboard.`,
    icon: 'i-heroicons-check-circle',
    color: 'success'
  })
}
</script>