<template>
  <SmpHeader />
  <UPageSection>
    <UPageCard>
        <ContentRenderer v-if="laws" :value="laws"/>
    </UPageCard>
  </UPageSection>
</template>

<script setup>

const { data: laws } = await useAsyncData(() => queryCollection('content').path('/laws').first())

useSeoMeta({
  title: laws.value?.title,
  description: laws.value?.description
})

</script>