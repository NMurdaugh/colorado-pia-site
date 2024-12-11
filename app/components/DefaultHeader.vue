<template>
  <UHeader :links>
    <template #right?>
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
    },
  ];
</script>

<style scoped></style>
