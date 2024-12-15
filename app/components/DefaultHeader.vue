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
