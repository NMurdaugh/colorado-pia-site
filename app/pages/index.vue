<script setup lang="ts">
  const route = useRoute();

  // Cycle headline word every 2 seconds on mount, stopping on the last word in the list
  const highlighted_words = [
    "businesses",
    "schools",
    "places of worship",
    "future",
  ];
  const current_word = ref(highlighted_words[0]);
  const cycle = () => {
    const index = highlighted_words.indexOf(current_word.value!);
    if (index !== highlighted_words.length - 1) {
      current_word.value = highlighted_words[index + 1];
    }
  };

  useSetInterval(cycle, 3000);

  const ui = /*ui*/ {
    wrapper: "bg-gradient-to-r from-zinc-900",
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
          Protecting Colorado's
          <Transition
            name="translate-fade"
            mode="out-in"
          >
            <span
              class="text-primary block"
              :key="current_word"
              >{{ current_word }}</span
            >
          </Transition>
        </h1></template
      >
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
</template>

<style scoped>
  .translate-fade-enter-active {
    transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s;
  }

  .translate-fade-leave-active {
    transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
  }

  .translate-fade-enter-from {
    transform: translateX(300px);
    opacity: 0;
  }

  .translate-fade-leave-to {
    transform: translateX(-50px);
    opacity: 0;
  }
</style>
