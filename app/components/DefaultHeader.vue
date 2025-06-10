<template>
  <UHeader :ui>
    <template #logo>
      <div class="flex items-center space-x-4">
        <NuxtImg
          src="/colorado-pia-logo.png"
          alt="Colorado Protection and Investigation Agency Logo"
          width="80"
          height="80"
          class="w-auto h-16 md:h-20"
        />
        <div
          class="hidden md:flex flex-col items-start transition-opacity duration-200"
        >
          <p class="font-medium">Colorado Protection and</p>
          <p class="font-medium">Investigation Agency</p>
        </div>
      </div>
    </template>
    <template #right>
      <UButton
        class="hidden md:inline-flex text-base px-4 py-2"
        label="Book a call"
        to="consultation/"
        aria-label="Book a Call"
      />
      <UButton
        class="md:hidden text-sm px-2 py-1"
        label="Book a call"
        to="consultation/"
        aria-label="Book a Call"
      />
      <!-- add phone number that dials -->
      <UButton
        class="hidden md:inline-flex text-base px-4 py-2"
        variant="outline"
        label="Call Us"
        aria-label="Call Us"
        to="tel:303-578-0879"
      />
      <UButton
        class="md:hidden text-sm px-2 py-1"
        variant="outline"
        label="Call Us"
        aria-label="Call Us"
        to="tel:303-578-0879"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
  import { headerLinks } from "~/data/navigation";

  const ui = {
    wrapper: "py-2 md:py-6",
    button: {
      base: "transition-colors duration-200",
      font: "font-medium",
      padding: "px-4 py-2",
    },
  };

  const links = headerLinks;
</script>

<style scoped>
  .transition-opacity {
    transition: opacity 0.2s ease-in-out;
  }
</style>
