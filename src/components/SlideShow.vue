<template>
  <div class="relative h-screen w-[400vw] overflow-hidden">
    <div class="absolute inset-0 flex slide-container duration-1000">
      <div class="w-full">
        <img
          src="@/assets/images/photo-t1-1.png"
          class="object-cover w-screen"
          alt="Photo VW T1"
        />
      </div>
      <div class="w-full">
        <img
          src="@/assets/images/photo-t1-2.png"
          class="object-cover w-screen"
          alt="Photo VW T1"
        />
      </div>
      <div class="w-full">
        <img
          src="@/assets/images/photo-t1-1.png"
          class="object-cover w-screen"
          alt="Photo VW T1"
        />
      </div>
      <div class="w-full">
        <img
          src="@/assets/images/photo-t1-2.png"
          class="object-cover w-screen"
          alt="Photo VW T1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideShow",
};
</script>
<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  8.33% {
    transform: translateX(0);
  }
  16.67% {
    transform: translateX(-100vw);
  }
  25% {
    transform: translateX(-100vw);
  }
  33.34% {
    transform: translateX(-200vw);
  }
  41.67% {
    transform: translateX(-200vw);
  }
  50.01% {
    transform: translateX(-300vw);
  }
  58.34% {
    transform: translateX(-300vw);
  }
  66.68% {
    transform: translateX(-200vw);
  }
  75.01% {
    transform: translateX(-200vw);
  }
  83.35% {
    transform: translateX(-100vw);
  }
  91.68% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(0);
  }
}

.slide-container {
  animation: slide 30s infinite;
}
</style>
