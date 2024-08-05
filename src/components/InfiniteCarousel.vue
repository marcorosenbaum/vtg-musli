<template>
  <a
    class="inline-block"
    href="https://home.mobile.de/VTGMUSLIAUTOMOBILE#ses"
    target="_blank"
  >
    <div
      class="absolute bottom-[3%] right-0 bg-sky-800/80 rounded-l-[60px] py-8 px-14"
    >
      <div
        class="koho move-right text-white hover:text-light-orange duration-300 text-2xl flex flex-col items-center"
      >
        <p>unsere Fahrzeuge:</p>
        <p class="z-20 text-4xl">
          mobile<span class="text-light-orange">.</span>de
        </p>
      </div>
    </div>
  </a>
  <div class="absolute h-screen w-[500vw] overflow-hidden -z-[1000]">
    <div class="absolute inset-0 flex slide-container duration-1000">
      <div class="w-full relative">
        <img
          src="@/assets/images/photo-t1-front.png"
          class="object-cover w-screen h-screen"
          alt="Photo VW T1"
        />
        <h2 class="absolute bottom-[10%] text-white left-[5%]">Automobile</h2>
      </div>
      <div class="w-full relative">
        <img
          src="@/assets/images/photo-t1-heck.jpeg"
          class="object-cover w-screen h-screen"
          alt="Photo VW T1"
        />
        <h2 class="absolute top-[5%] left-[5%] text-white">
          Service,<br />der überzeugt.
        </h2>
      </div>
      <div class="relative w-full">
        <img
          src="@/assets/images/photo-t1-half.jpeg"
          class="object-cover w-screen h-screen"
          alt="Photo VW T1"
        />
        <h2 class="absolute top-[5%] pl-8 right-[4%] text-white">
          Qualität für sichere Fahrten.
        </h2>
      </div>
      <div class="w-full relative">
        <img
          src="@/assets/images/photo-t1-inside.jpeg"
          class="object-cover w-screen h-screen"
          alt="Photo VW T1"
        />
        <h2 class="absolute bottom-[15%] left-[5%] text-white">
          Entspannt unterwegs.
        </h2>
      </div>
      <div class="w-full relative">
        <img
          src="@/assets/images/photo-t1-front.png"
          class="object-cover w-screen h-screen -z-50"
          alt="Photo VW T1"
        />
        <h2 class="absolute bottom-[10%] text-white left-[5%]">Automobile</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfiniteCarousel",
};
</script>

<style scoped>
.slide-container {
  animation: slide 50s infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  9.09% {
    transform: translateX(0);
  }
  18.18% {
    transform: translateX(-100vw);
  }
  27.27% {
    transform: translateX(-100vw);
  }
  36.36% {
    transform: translateX(-100vw);
  }
  45.45% {
    transform: translateX(-200vw);
  }
  54.54% {
    transform: translateX(-200vw);
  }
  63.63% {
    transform: translateX(-200vw);
  }
  72.72% {
    transform: translateX(-300vw);
  }
  81.81% {
    transform: translateX(-300vw);
  }
  90.90% {
    transform: translateX(-300vw);
  }
  100% {
    transform: translateX(-400vw);
  }
}
</style>
