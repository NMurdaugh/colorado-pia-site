<script setup lang="ts">
  const route = useRoute();
  const links = [
    {
      label: "Book a consultation",
      size: "lg",
    },
    {
      label: "Emergency Service",
      size: "lg",
    },
  ];
</script>

<template>
  <ULandingHero
    description="Professional armed security services protecting what matters most with trained professionals and comprehensive solutions."
    :links
  >
    <template #title
      ><h1
        class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white lg:text-7xl"
      >
        Protecting Colorado's
        <span class="text-primary-400 block">Future</span>
      </h1></template
    >
    <template #default>
      <NuxtImg
        src="/denver-skyline-sunset.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </template>
  </ULandingHero>
</template>
