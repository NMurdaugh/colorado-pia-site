<template>
  <UHeader
    :links
    :ui
  >
    <template #logo>
      <NuxtImg
        src="/colorado-pia-logo.png"
        class="w-auto h-16 md:h-20"
      />
    </template>
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<script setup>
  const ui = /* ui */ {
    wrapper: "py-2 md:py-6",
  };

  const links = [
    {
      label: "Protection Services",
      to: "/services",
      children: [
        {
          label: "Corporate",
          to: "/corporate-security",
        },
        {
          label: "Schools",
          to: "/school-security",
        },
        {
          label: "Places of Worship",
          to: "/worship-security",
        },
        {
          label: "Ultra High Networth Individuals",
          to: "/high-networth-security",
        },
      ],
    },
    {
      label: "Training",
      to: "/training",
    },
    {
      label: "About Us",
      to: "/about",
    },
  ];
</script>

<style scoped></style>
