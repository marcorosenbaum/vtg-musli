<template>
  <div id="start-section" class="relative h-screen overflow-hidden">
    <infinite-carousel />
    <div class="mx-8 lg:mx-16 pt-24"></div>
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
