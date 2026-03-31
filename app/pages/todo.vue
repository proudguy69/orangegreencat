<template>
    <SmpHeader />
    <UPageSection>
        <UPageCard variant="soft">
            <ContentRenderer v-if="todo" :value="todo"/>
            <div v-else>No todo list</div>
        </UPageCard>
    </UPageSection>
</template>

<script setup>
const { data: todo } = await useAsyncData(() => queryCollection('content').path('/todo').first())


const title = "Todo list for the OGC SMP"
const desc = "This site shows an updated todo list for the OGC SMP, items wont get removed maybe. but new items will be added"
useSeoMeta({
    title: title,
    ogTitle: title,
    description: desc,
    ogDescription: desc,
    ogImage: 'https://orangegreencat.com/orangecat.png',
    thumbnail: 'https://orangegreencat.com/orangecat.png'
})
</script>