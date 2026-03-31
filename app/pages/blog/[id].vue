<template>
    <SmpHeader />
    <UPageSection v-if="post">
        <UPageCard variant="soft" class="whitespace-pre-wrap break-words max-w-full"
        :ui="{
            body: 'prose [&_pre]:whitespace-pre-wrap [&_pre]:break-words [&_pre]:max-w-full'
        }">
            <ContentRenderer :value="post"/>
        </UPageCard>
    </UPageSection>
    <UPageSection v-else title="No blog found, sorry!", description="Make sure you followed the right link">

    </UPageSection>
</template>

<script setup>



const route = useRoute()

const id = ref(route.params.id)

console.log('/blogs/post' + id.value)

const { data: post } = await useAsyncData(() => queryCollection('content').path('/blogs/post' +id.value).first())

console.log(post.title)

useSeoMeta({
    title: "[FINAL/LAST ALPHA update] OGC SMP Alpha 0.4.0 Release!",
    ogTitle: "[FINAL/LAST ALPHA update] OGC SMP Alpha 0.4.0 Release!",
    description: "Added Crack pipe, and other things! This is the last update so we also tell you whats going forward",
    ogDescription: "Added Crack pipe, and other things! This is the last update so we also tell you whats going forward",
    ogImage: "/crackimg.png",
})


</script>

<style>

pre {
    max-width: 100%;
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: anywhere;
}

</style>