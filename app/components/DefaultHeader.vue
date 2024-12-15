<template>
  <UHeader :links>
    <template
      #logo
      class="line-clamp-2"
    >
      <p>Colorado Protection and Investigation Agency</p>
    </template>
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<script setup>
  const links = [
    {
      label: "About Us",
      to: "/about",
    },
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
  ];
</script>

<style scoped></style>
