<template>
  <UHeader :links>
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
      label: "Services",
      to: "/services",
      children: [
        {
          label: "Corporate Security",
          to: "/corporate-security",
        },
        {
          label: "School Security",
          to: "/school-security",
        },
        {
          label: "Place of Worship Security",
          to: "/worship-security",
        },
      ],
    },
  ];
</script>

<style scoped></style>
