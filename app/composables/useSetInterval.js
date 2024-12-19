export default function useSetInterval(callback, delay) {
  let timer = null;

  function startInterval() {
    stopInterval();
    timer = setInterval(callback, delay);
  }

  function stopInterval() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  onBeforeMount(() => {
    startInterval();
  });

  onBeforeUnmount(() => {
    stopInterval();
  });

  return {
    startInterval,
    stopInterval,
  };
}
