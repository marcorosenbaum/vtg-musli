<template>
  <div class="relative h-screen w-[400vw] overflow-hidden">
    <div class="absolute inset-0 flex slide-container duration-1000">
      <div class="w-full">
        <img
          src="@/assets/images/photo-t1-1.png"
          class="object-cover w-screen h-screen"
          alt="Photo VW T1"
        />
      </div>
      <div class="w-full">
        <img
          src="@/assets/images/photo-t1-2.png"
          class="object-cover w-screen h-screen"
          alt="Photo VW T1"
        />
      </div>
      <div class="w-full">
        <img
          src="@/assets/images/photo-t1-1.png"
          class="object-cover w-screen h-screen"
          alt="Photo VW T1"
        />
      </div>
      <div class="w-full">
        <img
          src="@/assets/images/photo-t1-2.png"
          class="object-cover w-screen h-screen"
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
  5.56% {
    transform: translateX(0);
  }
  11.12% {
    transform: translateX(0);
  }
  16.67% {
    transform: translateX(-100vw);
  }
  22.23% {
    transform: translateX(-100vw);
  }
  27.79% {
    transform: translateX(-100vw);
  }
  33.34% {
    transform: translateX(-200vw);
  }
  38.9% {
    transform: translateX(-200vw);
  }
  44.46% {
    transform: translateX(-200vw);
  }
  50.01% {
    transform: translateX(-300vw);
  }
  55.57% {
    transform: translateX(-300vw);
  }
  61.13% {
    transform: translateX(-300vw);
  }
  66.68% {
    transform: translateX(-200vw);
  }
  72.24% {
    transform: translateX(-200vw);
  }
  77.8% {
    transform: translateX(-200vw);
  }
  83.35% {
    transform: translateX(-100vw);
  }
  88.91% {
    transform: translateX(-100vw);
  }
  94.47% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(0);
  }
}
.slide-container {
  animation: slide 40s infinite ease-in-out;
}
</style>
