<template>
  <div class="container mx-auto max-w-full">
    <DefaultHeader />
    <main>
      <slot />
    </main>
    <DefaultFooter />
  </div>
</template>

<script setup>
  useHead({
    titleTemplate: "%s - Colorado PIA",
  });
</script>
