<template>
  <div id="start-section" class="relative h-screen overflow-hidden">
    <infinite-carousel />
    <div class="mx-8 lg:mx-16 pt-24">
      <!-- <h1>Automobile</h1>
      <h2 class="mt-2">
        Entspannt unterwegs:<br />Qualität für sichere Fahrten!
      </h2> -->

      <!-- <div class="relativ">
        <a
          class="inline-block"
          href="https://home.mobile.de/VTGMUSLIAUTOMOBILE#ses"
          target="_blank"
        >
          <div
            class="koho move-right bottom-12 h-[16rem] w-[24rem] absolute flex justify-center"
          >
            <div
              class="flex flex-col text-white hover:text-light-orange duration-300 text-4xl justify-center items-center"
            >
              <p>unsere Fahrzeuge:</p>
              <p class="z-20 text-5xl">
                mobile<span class="text-[#004d78]">.</span>de
              </p>
            </div>
          </div>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import AppHeader from "./Header.vue";

import InfiniteCarousel from "./InfiniteCarousel.vue";

export default {
  name: "StartSection",
  components: {
    AppHeader,

    InfiniteCarousel,
  },
};
</script>
