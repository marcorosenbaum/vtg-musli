<template>
  <header
    class="fixed top-0 left-0 right-0 drop-shadow-xl bg-white z-[1000] flex items-center justify-between min-h-14 mb-16 px-8 lg:px-16 pt-4 pb-4"
  >
    <a href="#start-section">
      <img
        src="@/assets/images/vtg-logo-lean.png"
        alt="vtg musli logo"
        class="w-60"
      />
    </a>
    <div
      v-show="!show_menu"
      class="flex flex-col items-center lg:hidden cursor-pointer"
      @click="handleClick"
    >
      <div class="w-14 h-14 rounded-2xl flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#004d78"
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
    </div>

    <div class="gap-2 text-lg flex flex-row xl:gap-6 hide text-[#004d78]">
      <a
        class="cursor:pointer hover:text-light-orange transform duration-300"
        href="#angebot-section"
        >Angebot</a
      >
      <a
        class="cursor:pointer hover:text-light-orange transform duration-300"
        href="#finanzierung-section"
        >Finanzierung & Garantie</a
      >
      <a
        class="cursor:pointer hover:text-light-orange transform duration-300"
        href="#about-section"
        >Über Uns</a
      >
      <a
        class="cursor:pointer hover:text-light-orange transform duration-300"
        href="#contact-section"
        >Kontakt</a
      >
      <a
        class="cursor:pointer hover:text-light-orange transform duration-300"
        href="#review-section"
        >Bewertung</a
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    show_menu: Boolean,
  },
  methods: {
    handleClick() {
      console.log("clicked");
      this.$emit("open-menu");
    },
  },
};
</script>
