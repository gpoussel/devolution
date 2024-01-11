<script setup lang="ts">
import { onMounted } from 'vue';

import confetti from 'canvas-confetti';

import { randomInRange } from '@/utils/random';

onMounted(() => {
  const duration = 15_000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 50 };

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.6), y: randomInRange(-0.2, 0.8) },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.4, 0.9), y: randomInRange(-0.2, 0.8) },
    });
  }, 300);
});
</script>

<template>
  <div class="flex flex-col items-stretch">
    <p class="text-xl font-bold">Congratulations!</p>
    <p class="text-sm">
      You have overcome the pressure of deadlines, bugs, and crunch and have created a masterpiece
      that will be remembered for generations. Congratulations, you have made history!
    </p>
  </div>
</template>
