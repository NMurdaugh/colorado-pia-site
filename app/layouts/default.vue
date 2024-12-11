<template>
  <div class="container mx-auto max-w-5xl">
    <DefaultHeader />
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
  useHead({
    titleTemplate: "%s - Nicholas Murdaugh",
  });
</script>
