<template>
  <div
    class="absolute slide z-10 text-[#004D78] top-[-100%] rounded-b-3xl right-10 bg-[#E1F8FD]"
    :class="{ menu: show_menu }"
  >
    <div class="gap-8 p-8 flex flex-col text-2xl">
      <div>
        <div
          @click="$emit('close-menu')"
          class="text-sm cursor-pointer hover:text-light-orange transform duration-300"
        >
          <div class="flex justify-end">
            <img class="w-8" src="../assets/images/close-icon.png" />
          </div>
        </div>
        <a
          @click="$emit('close-menu')"
          class="hover:text-light-orange transform duration-300"
          href="#angebot-section"
          ><div class="flex gap-4 items-center">
            <img class="w-12" src="../assets/images/angebot-icon.png" /><span
              >Angebot</span
            >
          </div></a
        >
      </div>

      <a
        @click="$emit('close-menu')"
        class="hover:text-light-orange transform duration-300"
        href="#finanzierung-section"
        ><div class="flex gap-4 items-center">
          <img class="w-12" src="../assets/images/finanzierung-icon.png" /><span
            >Finanzierung & Garantie</span
          >
        </div></a
      >
      <a
        @click="$emit('close-menu')"
        class="hover:text-light-orange transform duration-300"
        href="#about-section"
        ><div class="flex gap-4 items-center">
          <img class="w-12" src="../assets/images/über-uns-icon.png" /><span
            >Über Uns</span
          >
        </div></a
      >
      <a
        @click="$emit('close-menu')"
        class="hover:text-light-orange transform duration-300"
        href="#contact-section"
        ><div class="flex gap-4 items-center">
          <img class="w-12" src="../assets/images/menü-phone-icon.png" /><span
            >Kontakt</span
          >
        </div></a
      >
      <a
        @click="$emit('close-menu')"
        class="hover:text-light-orange transform duration-300"
        href="#review-section"
      >
        <div class="flex gap-4 items-center">
          <img class="w-12" src="../assets/images/bewertung-icon.png" /><span
            >Bewertung</span
          >
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
  transition: all 1.4s;
}
</style>
