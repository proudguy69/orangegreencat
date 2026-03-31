<template>
    <UHeader>
        <template #title>
            <NuxtLink to="/" class="flex items-center gap-2 text-2xl font-bold text-green-400 hover:text-orange-500 transition-colors">
                <img src="https://render.crafty.gg/2dsvg/head/orangegreencat" class="h-8 rounded-lg">
                <span v-if="!isMobile">Orangegreencat SMP</span>
                <span v-else>OGC SMP</span>
            </NuxtLink>

            
        </template>

        <UNavigationMenu :items="navItems" />
        
        <template #right>
            <UButton to="https://discord.gg/GASyt8p4jw" class="bg-[#5865F2] hover:bg-[#E0E3FF] hover:cursor-pointer" icon="ic:baseline-discord">Discord</UButton>
        </template>

        <template #body>
            <UNavigationMenu :items="navItems" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>

<script setup>
const { isMobile } = useDevice()

const navItems = ref([
    {
        label: "Rules",
        to: '/rules'
    },
    {
        label: "Laws",
        to: '/laws'
    },
    {
        label: "Mod List",
        to: '/mods'
    },
    {
        label: "Change Log",
        to: '/changelog'
    },
    {
        label: "Todo",
        to: "/todo"
    },
    {
        label: "Blog",
        to: "/blog"
    }
])

</script>

