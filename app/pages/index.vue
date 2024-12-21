<script setup lang="ts">
  const route = useRoute();
  const { data: page } = await useAsyncData("index", () =>
    queryContent("/").findOne()
  );

  useHead({
    title: "Home",
  });

  const highlighted_words: string[] = [
    "businesses",
    "schools",
    "religious institutions",
    "future",
  ];

  const ui = /*ui*/ {
    wrapper: "bg-gradient-to-r from-zinc-900",
    container: "lg:grid-cols-1",
  };
</script>

<template>
  <div
    id="hero-background"
    class="bg-[url('/denver-skyline-sunset.jpg')] bg-right bg-no-repeat bg-cover"
  >
    <ULandingHero
      :ui
      orientation="horizontal"
    >
      <template #title
        ><h1
          class="text-4xl sm:text-5xl font-extrabold tracking-tight dark:text-white text-black lg:text-7xl"
        >
          Protecting <br />
          Colorado's <HomeHighlightedWord :word_list="highlighted_words" /></h1
      ></template>
      <template #description>
        <p class="text-xl max-w-lg">
          Our mission is to protect what matters most by employing experienced
          professionals, offering comprehensive training, and maintaining
          stringent standards to ensure exceptional service for our valued
          clients.
        </p>
      </template>
      <template #links>
        <UButton
          id="mobile-cta"
          class="md:hidden"
          label="Book a consultation"
          to="/consultation"
          size="xl"
          block
        />
        <UButton
          id="desktop-cta"
          class="hidden md:inline"
          label="Book a consultation"
          to="/consultation"
          size="xl"
        />
        <UButton
          id="mobile-emergency"
          class="md:hidden"
          label="Emergency Response"
          to="/emergency"
          size="xl"
          color="brightred"
          variant="outline"
          block
        />
        <UButton
          id="desktop-emergency"
          class="hidden md:inline"
          label="Emergency Response"
          to="/emergency"
          size="xl"
          color="brightred"
          variant="outline"
        />
      </template>
    </ULandingHero>
  </div>
  <ULandingSection
    v-if="page"
    :title="page.services_section.title"
    :description="page.services_section.description"
    class="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
  >
    <ULandingGrid class="gap-8">
      <LazyULandingCard
        orientation="horizontal"
        :ui="{
          background: 'dark:bg-gray-800 backdrop-blur-sm',
          wrapper:
            'dark:ring-gray-700 hover:ring-2 transition-all duration-300',
          shadow:
            'dark:shadow-gray-950/50 hover:shadow-xl transition-shadow duration-300',
        }"
        class="col-span-6 row-span-4 transform hover:-translate-y-1 transition-transform duration-300"
        v-for="service in page.services_section.services"
        :key="service.title"
        v-bind="service"
      >
        <NuxtPicture
          v-if="service.img_source"
          :src="service.img_source"
          :alt="service.title"
          format="avif,webp"
          width="800"
          height="600"
          class="w-full rounded-md"
        />
      </LazyULandingCard>
    </ULandingGrid>
  </ULandingSection>
</template>

<style scoped></style>
