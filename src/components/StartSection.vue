<template>
  <dropdown-menu :show_menu="show_menu" @close-menu="show_menu = false" />
  <div id="start-section" class="relative h-screen">
    <img
      src="@/assets/images/background-car.png"
      alt="photo car"
      class="absolute -z-10 opacity-35 w-full h-screen object-cover"
    />

    <app-header :show_menu="show_menu" @open-menu="show_menu = true" />

    <div class="mx-8 lg:mx-16">
      <h1>Automobile</h1>
      <h2 class="mt-2">
        Entspannt unterwegs:<br />Qualität für sichere Fahrten!
      </h2>

      <div class="relativ">
        <a
          class="inline-block"
          href="https://home.mobile.de/VTGMUSLIAUTOMOBILE#ses"
          target="_blank"
        >
          <div
            class="koho move-right bottom-12 h-[16rem] w-[24rem] absolute flex justify-center"
          >
            <svg
              height="16rem"
              width="24rem"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute top-0 left-0 -z-10"
            >
              <ellipse
                rx="12rem"
                ry="6rem"
                cx="12rem"
                cy="8rem"
                :style="{ fill: elipse_fill_color }"
                class="transform duration-1000"
              />
            </svg>

            <div
              @mouseenter="elipse_fill_color = '#E1F8FDE5'"
              @mouseleave="elipse_fill_color = '#004d78e6'"
              class="flex flex-col text-white hover:text-[#004d78] text-4xl justify-center items-center"
            >
              <p>unsere Fahrzeuge:</p>
              <p class="z-20 text-5xl">
                mobile<span class="text-light-orange">.</span>de
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";
import AppHeader from "./Header.vue";

export default {
  name: "StartSection",
  components: {
    DropdownMenu,
    AppHeader,
  },
  data() {
    return {
      elipse_fill_color: "#004d78e6",
      show_menu: false,
    };
  },
};
</script>

<style scoped></style>
