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
    container: "lg:grid-cols-1",
  };
</script>

<template>
  <div
    id="hero-background"
    class="bg-[url('/denver-skyline-sunset.jpg')] bg-right bg-no-repeat bg-cover relative"
  >
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"
    ></div>
    <ULandingHero
      :ui
      orientation="horizontal"
      class="relative animate-fade-in"
    >
      <template #title
        ><h1
          class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white lg:text-7xl drop-shadow-lg"
        >
          Protecting <br />
          Colorado's <HomeHighlightedWord :word_list="highlighted_words" /></h1
      ></template>
      <template #description>
        <p class="text-xl max-w-lg text-gray-100 drop-shadow-md font-medium">
          Our mission is to protect what matters most by employing experienced
          professionals, offering comprehensive training, and maintaining
          stringent standards to ensure exceptional service for our valued
          clients.
        </p>
      </template>
      <template #links>
        <UButton
          id="mobile-cta"
          class="md:hidden transform transition-all duration-300 hover:scale-105"
          label="Book a consultation"
          to="/consultation"
          size="xl"
          block
        />
        <UButton
          id="desktop-cta"
          class="hidden md:inline transform transition-all duration-300 hover:scale-105"
          label="Book a consultation"
          to="/consultation"
          size="xl"
        />
        <UButton
          id="mobile-emergency"
          class="md:hidden transform transition-all duration-300 hover:scale-105"
          label="Emergency Response"
          to="/emergency"
          size="xl"
          color="brightred"
          variant="outline"
          block
        />
        <UButton
          id="desktop-emergency"
          class="hidden md:inline transform transition-all duration-300 hover:scale-105"
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
          background: 'backdrop-blur-sm',
          wrapper:
            'dark:ring-gray-700 hover:ring-2 transition-all duration-300',
          shadow:
            'dark:shadow-gray-950/50 hover:shadow-xl transition-shadow duration-300',
          icon: {
            base: 'dark:text-primary',
          },
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
  <ULandingSection
    v-if="page"
    :title="page.testimonials.title"
    :description="page.testimonials.description"
    class="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
  >
    <UCarousel
      :items="page.testimonials.items"
      v-slot="{ item }"
      class="px-4 sm:px-6 lg:px-8"
      :ui="{
        wrapper: 'relative max-w-5xl mx-auto',
        item: 'h-full flex-shrink-0 snap-start',
        container: 'flex items-center',
      }"
      :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: '-start-12',
      }"
      :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: '-end-12',
      }"
      arrows
    >
      <div class="w-full max-w-3xl mx-auto">
        <ULandingTestimonial
          v-bind="item"
          card
        />
      </div>
    </UCarousel>
  </ULandingSection>
</template>

<style scoped>
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
