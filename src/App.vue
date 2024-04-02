<template>
  <start-section />
  <angebot-section />
  <finanzierung-section />
  <about-section />

  <contact-section />
  <review-section />

  <footer
    class="bg-dark-blue text-white text-sm py-8 mt-32 flex px-8 lg:px-16 hover:text-light-orange transform duration-300"
  >
    <a href="https://home.mobile.de/VTGMUSLIAUTOMOBILE#imprint" target="_blank"
      >Impressum & Rechtliches</a
    >
  </footer>
</template>

<script>
import StartSection from "@/components/StartSection.vue";
import AngebotSection from "@/components/AngebotSection.vue";
import FinanzierungSection from "@/components/FinanzierungSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import ReviewSection from "@/components/ReviewSection.vue";

export default {
  name: "App",
  components: {
    StartSection,
    AngebotSection,
    FinanzierungSection,
    AboutSection,
    ContactSection,
    ReviewSection,
  },
};
</script>
