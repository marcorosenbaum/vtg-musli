<template>
  <div id="contact-section">
    <h1 class="py-16 px-8 lg:px-16">Kontakt</h1>
    <div class="grid grid-cols-1 gap-y-8 xl:grid-cols-2 xl:gap-x-8 text-[2rem]">
      <div
        class="bg-light-blue py-16 px-8 lg:px-16 flex flex-col gap-y-8 justify-around"
      >
        <div class="flex items-center gap-4">
          <img
            src="@/assets/images/mail-icon.png"
            alt="mail icon"
            class="h-[3rem]"
          />
          <a
            href="mailto:info@vtg-musli.de"
            class="xl:hover:text-light-orange transform duration-300 text-blue-link sm:text-black"
            >info@vtg-musli.de</a
          >
        </div>

        <div class="flex items-center gap-4">
          <img
            src="@/assets/images/phone-icon.png"
            alt="phone icon"
            class="h-[3rem]"
          />
          <a
            href="tel:+491627549001"
            class="cursor-pointer xl:hover:text-light-orange text-blue-link sm:text-black transform duration-300"
            type="phone"
            >+49 162 7549001</a
          >
        </div>

        <div class="flex items-center gap-4">
          <img
            src="@/assets/images/car-icon.png"
            alt="car icon"
            class="h-[3rem]"
          />
          <a
            href="https://home.mobile.de/VTGMUSLIAUTOMOBILE#about"
            target="_blank"
            class="cursor-pointer xl:hover:text-light-orange transform duration-300 text-blue-700 sm:text-black"
            >mobile.de</a
          >
        </div>
      </div>

      <div
        class="bg-light-blue py-16 px-8 lg:px-16 text-[2rem] flex flex-col gap-10"
      >
        <p><b>Öffnungszeiten</b></p>

        <p>
          Montag - Freitag<br />
          09:30 - 12:30 Uhr & 14:00&nbsp;-&nbsp;18:00&nbsp;Uhr
        </p>

        <p>
          Samstag<br />
          09:30 - 12:30 Uhr
        </p>
      </div>
    </div>

    <div class="mt-16 mx-8 lg:mx-16">
      <div class="flex items-center gap-4 text-[2rem] mt-32">
        <img
          src="@/assets/images/pin-icon.png"
          alt="pin icon"
          class="h-[3rem]"
        />
        <p>Alte Geesteschleife 2, DE-27576 Bremerhaven</p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.1023428714443!2d8.597124299999999!3d53.555940500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6b107bad24647%3A0xb56cf34e16d2241!2sVTG-Musli%20Automobile!5e0!3m2!1sde!2sse!4v1711524128508!5m2!1sde!2sse"
          width="100%"
          class="mt-16 h-[70vh]"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="google embet code"
          alt="google map"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>
