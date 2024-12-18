<script setup lang="ts">
  const route = useRoute();

  const ui = /* ui */ {
    wrapper: "bg-gradient-to-r from-zinc-900",
  };

  const links = [
    {
      label: "Book a consultation",
      size: "xl",
      to: "/consultation",
    },
    {
      label: "Emergency Response",
      size: "xl",
      to: "/emergency",
      variant: "outline",
    },
  ];
</script>

<template>
  <div
    id="hero-background"
    class="bg-[url('/denver-skyline-sunset.jpg')] bg-right bg-no-repeat bg-cover"
  >
    <ULandingHero
      description="Our mission is to protect what matters most by employing experienced professionals, offering comprehensive training, and maintaining stringent standards to ensure exceptional service for our valued clients"
      :links
      :ui
      orientation="horizontal"
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
  </div>
</template>
