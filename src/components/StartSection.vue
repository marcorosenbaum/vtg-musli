<template>
  <div
    v-show="show_menu"
    class="absolute rounded-bl-xl z-10 text-white top-0 right-0 bg-[#004d78]"
  >
    <div class="gap-6 p-4 flex flex-col">
      <p
        @click="show_menu = false"
        class="pb-2 text-lg cursor:pointer hover:text-light-orange"
      >
        Menü schließen
      </p>
      <a
        @click="show_menu = false"
        class="cursor:pointer hover:text-light-orange"
        href="#angebot-page"
        >Angebot</a
      >
      <a
        @click="show_menu = false"
        class="cursor:pointer hover:text-light-orange"
        href="#finanzierung-page"
        >Finanzierung & Garantie</a
      >
      <a
        @click="show_menu = false"
        class="cursor:pointer hover:text-light-orange"
        href="#about"
        >Über Uns</a
      >
      <a
        @click="show_menu = false"
        class="cursor:pointer hover:text-light-orange"
        href="#contact"
        >Kontakt</a
      >
      <a
        @click="show_menu = false"
        class="cursor:pointer hover:text-light-orange"
        href="#reviews"
        >Bewertung</a
      >
    </div>
  </div>
  <div id="start-section" class="relative h-screen">
    <img
      src="@/assets/images/background-car.png"
      alt="photo car"
      class="absolute -z-10 opacity-35 w-full h-screen object-cover"
    />

    <header class="flex items-start justify-between h-14 mb-16 mx-16 py-16">
      <img
        src="@/assets/images/vtg-logo.png"
        alt="vtg musli logo"
        class="w-72"
      />

      <div
        v-show="!show_menu"
        class="flex flex-col items-center lg:hidden cursor-pointer"
        @click="show_menu = true"
      >
        <div
          class="bg-[#004d78e6] w-14 h-14 rounded-2xl flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
        <p class="text-[#004d78e6]">Menü</p>
      </div>

      <div class="gap-2 text-lg xl:text-[1.5rem] flex flex-row xl:gap-6 hide">
        <a
          class="cursor:pointer hover:text-light-orange"
          href="#angebot-section"
          >Angebot</a
        >
        <a
          class="cursor:pointer hover:text-light-orange"
          href="#finanzierung-section"
          >Finanzierung & Garantie</a
        >
        <a class="cursor:pointer hover:text-light-orange" href="#about-section"
          >Über Uns</a
        >
        <a
          class="cursor:pointer hover:text-light-orange"
          href="#contact-section"
          >Kontakt</a
        >
        <a class="cursor:pointer hover:text-light-orange" href="#review-section"
          >Bewertung</a
        >
      </div>
    </header>

    <div class="mx-16">
      <h1>Automobile</h1>
      <h2 class="mt-10">
        Entspannt unterwegs:<br />Qualität für sichere Fahrten!
      </h2>

      <div class="relativ">
        <a
          class="inline-block"
          href="https://home.mobile.de/VTGMUSLIAUTOMOBILE#ses"
          target="_blank"
        >
          <div
            class="koho move-right bottom-16 h-[16rem] w-[24rem] absolute flex justify-center"
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
              />
            </svg>

            <div
              @mouseenter="elipse_fill_color = '#E1F8FDE5'"
              @mouseleave="elipse_fill_color = '#004d78e6'"
              class="flex flex-col text-white hover:text-[#004d78] text-4xl justify-center items-center"
            >
              <p>unsere Fahrzeuge:</p>
              <p class="relat z-20 text-5xl">
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
export default {
  name: "StartSection",
  data() {
    return {
      elipse_fill_color: "#004d78e6",
      show_menu: false,
    };
  },
};
</script>

<style scoped></style>
