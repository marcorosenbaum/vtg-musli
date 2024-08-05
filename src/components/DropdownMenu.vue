<template>
  <div
    class="fixed slide z-[1100] text-[#004D78] top-[-200%] w-screen h-screen bg-[#E1F8FD]"
    :class="{ menu: show_menu }"
  >
    <div class="gap-20 p-16 flex flex-col text-4xl">
      <div>
        <div
          @click="$emit('close-menu')"
          class="text-3xl mb-40 cursor-pointer hover:text-light-orange transform duration-300"
        >
          <div class="flex justify-end">
            <img
              alt="close menu"
              class="w-16"
              src="../assets/images/close-icon.png"
            />
          </div>
        </div>
        <a
          @click="$emit('close-menu')"
          class="hover:text-light-orange transform duration-300"
          href="#angebot-section"
          ><div class="flex gap-4 items-center">
            <img
              class="w-12"
              alt="angebot-icon"
              src="../assets/images/angebot-icon.png"
            /><span>Angebot</span>
          </div></a
        >
      </div>

      <a
        @click="$emit('close-menu')"
        class="hover:text-light-orange transform duration-300"
        href="#finanzierung-section"
        ><div class="flex gap-4 items-center">
          <img
            class="w-12"
            alt="finanzierung"
            src="../assets/images/finanzierung-icon.png"
          /><span>Finanzierung & Garantie</span>
        </div></a
      >
      <a
        @click="$emit('close-menu')"
        class="hover:text-light-orange transform duration-300"
        href="#about-section"
        ><div class="flex gap-4 items-center">
          <img
            class="w-12"
            src="../assets/images/über-uns-icon.png"
            alt="about"
          /><span>Über Uns</span>
        </div></a
      >
      <a
        @click="$emit('close-menu')"
        class="hover:text-light-orange transform duration-300"
        href="#contact-section"
        ><div class="flex gap-4 items-center">
          <img
            class="w-12"
            src="../assets/images/menü-phone-icon.png"
            alt="contact"
          /><span>Kontakt</span>
        </div></a
      >
      <a
        @click="$emit('close-menu')"
        class="hover:text-light-orange transform duration-300"
        href="#review-section"
      >
        <div class="flex gap-4 items-center">
          <img
            class="w-12"
            src="../assets/images/bewertung-icon.png"
            alt="bewertungen"
          /><span>Bewertung</span>
        </div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: {
    show_menu: Boolean,
  },
};
</script>

<style scoped>
.menu {
  top: 0;
}

.slide {
  transition: all 0.5s;
}
</style>
