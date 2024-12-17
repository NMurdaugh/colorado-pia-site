<script setup lang="ts">
  const route = useRoute();

  const ui = /* ui */ {
    wrapper: "bg-[url('/denver-skyline-sunset.jpg')]",
  };

  const links = [
    {
      label: "Book a consultation",
      size: "xl",
      to: "/consultation",
    },
    {
      label: "Emergency Service",
      size: "xl",
      to: "/emergency",
      variant: "outline",
    },
  ];
</script>

<template>
  <ULandingHero
    description="Professional armed security services protecting what matters most with trained professionals and comprehensive solutions."
    :links
    :ui
  >
    <template #title
      ><h1
        class="text-4xl sm:text-5xl font-extrabold tracking-tight dark:text-white text-black lg:text-7xl"
      >
        Protecting Colorado's
        <span class="text-primary block">Future</span>
      </h1></template
    >
  </ULandingHero>
</template>
