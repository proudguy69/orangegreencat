<template>
    <SmpHeader />
    <UPageSection title="Mod List">
        <UPageCard>
            <ContentRenderer v-if="mods" :value="mods"/>
        </UPageCard>
    </UPageSection>
</template>

<script setup>
const { data: mods } = await useAsyncData(() => queryCollection('content').path('/mods').first())

useSeoMeta({
    title: 'OGC SMP modlist',
    ogTitle: 'OGC SMP modlist',
    description: 'The modlist for OGCSMP',
    ogDescription: 'The modlist for OGCSMP',
    ogImage: 'https://orangegreencat.com/orangecat.png',
    thumbnail: 'https://orangegreencat.com/orangecat.png'
})


    
</script>

<style>
.prose a {
    text-decoration: underline;
}
</style>