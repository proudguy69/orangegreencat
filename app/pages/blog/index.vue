<template>
    <SmpHeader />
    <UPageSection
    title="Blogs"
    description="Blogs by the creator, sometiems detailing updates, or other things related"
    >
    <UPageCard variant="soft">
        <UBlogPosts orientation="vertical">
            <UBlogPost v-for="post in posts" v-bind="post"/>
        </UBlogPosts>
    </UPageCard>
        
    </UPageSection>
</template>

<script setup>


const authors = [{
    name: "Orangegreencat",
    description: "@Orangegreencat",
    avatar: {
      src: 'https://render.crafty.gg/3d/bust/orangegreencat'
    }
}]

const posts = ref([
    {
        title: "First post!",
        description: "The first blog post",
        date: "02/02/2026",
        authors: authors,
        to: '/smp/blog/1',
        badge: "Regular Post",
        variant: "soft"
    },
    {
        title: "OGC SMP Alpha 0.2.0",
        description: "Release post for OGC SMP 0.2.0",
        date: "02/02/2026",
        authors: authors,
        to: '/smp/blog/2',
        badge: {
            label: "Alpha Release",
            variant: "subtle",
            color: "error"
        },
        variant: "soft"
    },
    {
        title: "OGC SMP Alpha 0.3.0",
        description: "Release post for OGC SMP 0.3.0",
        date: "02/04/2026",
        authors: authors,
        to: '/smp/blog/3',
        badge: {
            label: "Alpha Release",
            variant: "subtle",
            color: "error"
        },
        variant: "soft",
        image: "/BluntImg.png"
    },
    {
        title: "[LAST ALPHA] OGC SMP Alpha 0.4.0",
        description: "Release post for OGC SMP 0.4.0",
        date: "02/06/2026",
        authors: authors,
        to: '/smp/blog/4',
        badge: {
            label: "LAST Alpha Release",
            variant: "subtle",
            color: "error"
        },
        variant: "soft",
        image: "/crackimg.png"
    },
])

const title = "OGC SMP Blog"
const desc = "You will find updates to changelogs, and regular post about OGC SMP and other shit"


useSeoMeta({
    title: title,
    ogTitle: title,
    description: desc,
    ogDescription: desc,
    ogImage: 'https://orangegreencat.com/orangecat.png',
})

</script>