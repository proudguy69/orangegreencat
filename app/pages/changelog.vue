<template>
    <SmpHeader />
    <UPageSection title="Change Log">
        <UPageCard variant="soft">
            <UChangelogVersions>
                <UChangelogVersion
                v-for="(version, index) in versions"
                :key="index"
                v-bind="version"
                />
            </UChangelogVersions>
        </UPageCard>
    </UPageSection>
</template>

<script setup>

function version(title, description, date, to=null, image=null) {
    const data = {
        title: title,
        description: description,
        date: date,
        badge: {
            label: "Alpha",
            color: "error"
        },
        authors: [
            {
                name: "Orangegreencat",
                description: "@Orangegreencat",
                avatar: {
                    src: "https://render.crafty.gg/3d/bust/orangegreencat"
                }
            }
        ],
        to: to,
        image: image

    }
    return data
}

const versions = ref([
    {
        title: "Osmp 0.1.0 Snapshot 1.0",
        description: "The first version, added base code to everything, and test items like 'condensed weed block' and 'weed' item",
        date: "01/19/2026",
        badge: {
            label: "Alpha",
            color: "error"
        },
        authors: [
            {
                name: "Orangegreencat",
                description: "@Orangegreencat",
                avatar: {
                    src: "https://render.crafty.gg/3d/bust/orangegreencat"
                }
            }
        ],
    },
    version("Osmp 0.1.1 Snapshot 1.0", "Added custom weed crop foundatiion", "01/20/2026"),
    version("Osmp 0.1.2 Snapshot 1.0", "Added Bud, Dabpen, Soft world border, weed seeds, weedcrop, and crafting receipe for dab pen", "01/21/2026"),
    version("Osmp 0.1.3 Snapshot 1.0", "Removed 'weed' item and block, added cocain, cocain dust, world border tolls partially, osmp tokens, and made bud consumable", "01/21/2026"),
    version("Osmp 0.1.4 Snapshot 1.0", "Fixed world border issues, added force expire command on tolls, added long term effects of cocain usage, created a local database", "01/29/2026"),
    version("Osmp 0.1.5 Snapshot 1.0", "Fixed the force expire command, fixed world border teleport (kinda, still got some bugs aparently), removed 'test_command' that was added in earlier versions", "01/30/2026"),
    version("Osmp 0.2.0 Snapshot 1.0", "Fixed bug with teleporting FULLY, Fixed bug with not being able to pay for toll twice, changed the naming convention", "02/02/2026", "/blog/2"),
    version("Osmp 0.3.0 Snapshot 1.0", "Added blunts and a crafting recipe, Fixed dab pen", "02/04/2026", "/blog/3", "/BluntImg.png"),
    version("LAST ALPHA Osmp 0.4.0 Snapshot 1.0", "Added Crack pipe, and other things! This is the last update so we also go over whats going on moving forward", "02/06/2026", "/blog/4", "/crackimg.png"),
])

const current = versions.value[versions.value.length-1]

useSeoMeta({
    title: 'OGC SMP changelog',
    ogTitle: 'OGC SMP changelog',
    description: 'Changelog for the OGCSMP, Current Version: ' + current.title + "\nVersion Description:\n" + current.description,
    ogDescription: 'Changelog for the OGCSMP, Current Version: ' + current.title + "\nVersion Description:\n" + current.description,
    ogImage: 'https://orangegreencat.com/orangecat.png',
    thumbnail: 'https://orangegreencat.com/orangecat.png'
})

</script>