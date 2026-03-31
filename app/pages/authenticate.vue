<template>
    <UPageSection title="You are being redirected">
    </UPageSection>
</template>

<script setup>

const route = useRoute()
const code = ref("")


onMounted(async () => {
    code.value = route.query.code

    const response = await fetch(`http://localhost:8000/authenticate?code=${code.value}`)
    const data = await response.json()
    console.log(data)

})

</script>