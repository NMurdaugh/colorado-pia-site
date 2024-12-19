<template>
  <UHeader
    :links
    :ui
  >
    <template #logo>
      <div class="flex items-center space-x-4">
        <NuxtImg
          src="/colorado-pia-logo.png"
          class="w-auto h-16 md:h-20"
        />
        <div class="hidden md:inline flex-col `items-start">
          <p>Colorado Protection and</p>
          <p>Investigation Agency</p>
        </div>
      </div>
    </template>
    <template #right>
      <UButton
        class="hidden md:inline"
        size="lg"
        color="brightred"
        variant="outline"
        label="Emergency Response"
        to="/emergency"
      />
      <UButton
        class="md:hidden"
        size="xs"
        color="brightred"
        variant="outline"
        label="Emergency Response"
        to="/emergency"
      />
      <!-- <UColorModeButton /> -->
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
          label: "Workplace Violence Prevention",
          to: "/workplace-security",
        },
        {
          label: "Schools",
          to: "/school-security",
        },
        {
          label: "Religious Institutions",
          to: "/religious-security",
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
