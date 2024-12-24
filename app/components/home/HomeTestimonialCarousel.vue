<template>
  <UCarousel
    :items
    v-slot="{ item }"
    class="px-4 sm:px-6 lg:px-8 rounded-lg overflow-hidden"
    :ui="{
      item: 'h-full snap-start basis-full',
      indicators: {
        wrapper: 'relative bottom-0 mt-4',
      },
    }"
    indicators
  >
    <ULandingTestimonial
      v-bind="item"
      class="w-full max-w-2xl mx-auto min-h-[13.75rem] md:min-h-max"
      card
    />
  </UCarousel>
</template>

<script lang="ts" setup>
  const { items } = defineProps({
    items: {
      type: Array<object>,
      required: true,
    },
  });
</script>

<style></style>
