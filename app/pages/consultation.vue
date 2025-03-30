<template>
  <div>
    <ULandingSection
      v-if="page"
      :title="page.title"
      :description="page.description"
      class="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <ContactForm />
    </ULandingSection>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const { data: page } = await useAsyncData("contact", () =>
    queryContent("/contact").findOne()
  );

  useHead({
    title: "Contact",
  });
</script>

<style></style>
