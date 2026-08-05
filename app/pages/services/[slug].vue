<script setup lang="ts">
  const route = useRoute();
  const slug = route.params.slug as string;

  const { data: page } = await useAsyncData(`service-${slug}`, () =>
    queryContent(`/services/${slug}`).findOne(),
  );

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Service not found",
    });
  }

  useHead({
    title: page.value?.title ?? slug,
  });
</script>

<template>
  <div v-if="page">
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="[
        {
          label: 'Book a Consultation',
          to: '/consultation',
          size: 'xl',
        },
      ]"
      class="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900"
    />

    <ULandingSection
      :title="page.overview.title"
      :description="page.overview.description"
      class="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <ULandingGrid class="gap-8">
        <ULandingCard
          v-for="feature in page.overview.features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          class="col-span-6 row-span-2"
        />
      </ULandingGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.details.title"
      :description="page.details.description"
      class="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div class="max-w-3xl mx-auto space-y-6">
        <p
          v-for="(paragraph, index) in page.details.paragraphs"
          :key="index"
          class="text-lg text-gray-700 dark:text-gray-300"
        >
          {{ paragraph }}
        </p>
      </div>
    </ULandingSection>

    <ULandingSection
      :title="page.cta.title"
      :description="page.cta.description"
      class="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div class="flex justify-center">
        <UButton
          :label="page.cta.button_label"
          :to="page.cta.button_to"
          size="xl"
        />
      </div>
    </ULandingSection>
  </div>
</template>
