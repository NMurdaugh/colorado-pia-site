<template>
  <LazyULandingCard
    orientation="horizontal"
    :ui="{
      background: 'backdrop-blur-sm',
      wrapper: 'dark:ring-gray-700 hover:ring-2 transition-all duration-300',
      shadow:
        'dark:shadow-gray-950/50 hover:shadow-xl transition-shadow duration-300',
      icon: {
        base: 'dark:text-primary',
      },
    }"
    class="col-span-6 row-span-4 transform hover:-translate-y-1 transition-transform duration-300"
    v-bind="service"
  >
    <NuxtPicture
      v-if="service.img_source"
      :src="service.img_source"
      :alt="service.title"
      format="avif,webp"
      width="800"
      height="600"
      class="w-full rounded-md"
    />
  </LazyULandingCard>
</template>

<script lang="ts" setup>
  const { service } = defineProps({
    service: {
      type: Object,
      required: true,
    },
  });
</script>
const {}

<style></style>
