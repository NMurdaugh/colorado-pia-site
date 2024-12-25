<script setup lang="ts">
  const route = useRoute();
  const { data: page } = await useAsyncData("index", () =>
    queryContent("/").findOne()
  );

  useHead({
    title: "Home",
  });
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
      v-if="page"
      :ui="{
        container: 'lg:grid-cols-1',
      }"
      orientation="horizontal"
      class="relative animate-fade-in"
    >
      <template #title
        ><h1
          class="text-4xl sm:text-5xl overflow-x-hidden pb-2 -mb-2 font-extrabold tracking-tight text-white lg:text-7xl drop-shadow-lg"
        >
          {{ page.hero_section.title_static_top }} <br />
          {{ page.hero_section.title_static_bottom }}
          <HomeHighlightedWord
            :word_list="page.hero_section.dynamic_words"
          /></h1
      ></template>
      <template #description>
        <p class="text-xl max-w-lg text-gray-100 drop-shadow-md font-medium">
          {{ page.hero_section.description }}
        </p>
      </template>
      <template #links>
        <HomeHeroButtonGroup />
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
      <HomeServiceCard
        v-for="service in page.services_section.services"
        :key="service.title"
        :service="service"
      />
    </ULandingGrid>
  </ULandingSection>
  <ULandingSection
    v-if="page"
    :title="page.testimonials.title"
    :description="page.testimonials.description"
    class="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
  >
    <HomeTestimonialCarousel :items="page.testimonials.items" />
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
