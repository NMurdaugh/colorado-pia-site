<template>
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
</template>

<script setup lang="ts">
  // Cycle headline word every 2 seconds on mount, stopping on the last word in the list
  const { word_list, interval } = defineProps({
    word_list: {
      type: Array<string>,
      required: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  });

  const current_word = ref(word_list[0]);
  const cycle = () => {
    const index = word_list.indexOf(current_word.value!);
    if (index !== word_list.length - 1) {
      current_word.value = word_list[index + 1];
    }
  };

  useSetInterval(cycle, interval);
</script>

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
