<template>
  <SmpHeader />
  <UPageSection>
    <UPageCard>
        <ContentRenderer v-if="rules" :value="rules"/>
    </UPageCard>
  </UPageSection>
</template>

<script setup lang="ts">

const { data: rules } = await useAsyncData(() => queryCollection('content').path('/rules').first())

useSeoMeta({
  title: rules.value?.title,
  description: rules.value?.description
})

</script>