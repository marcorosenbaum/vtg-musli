<template>
  <div id="angebot-section" class="mt-16 mx-8 lg:mx-16">
    <h1>Unser Angebot</h1>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-4 mt-16">
      <div class="bg-light-blue p-6 flex items-center gap-4 rounded-md">
        <img
          src="@/assets/images/fahrzeug-icon.png"
          alt="fahrzeug icon"
          class="h-[3rem]"
        />
        <p>Das passende Fahrzeug für Sie</p>
      </div>

      <div class="bg-light-blue p-6 flex gap-4 items-center rounded-md">
        <img
          src="@/assets/images/fahrzeugaufbereitung-icon.png"
          alt="fahrzeugaufbereitung icon"
          class="h-[3rem]"
        />
        <p>Professionelle Fahrzeugaufbereitung</p>
      </div>

      <div class="bg-light-blue p-6 flex gap-4 items-center rounded-md">
        <img
          src="@/assets/images/probefahrt-icon.png"
          alt="probefahrt icon"
          class="h-[3rem]"
        />
        <p>Ausgebiege Probefahrt</p>
      </div>

      <div class="bg-light-blue p-6 flex items-center gap-4 rounded-md">
        <img
          src="@/assets/images/inzahlungnahme-icon.png"
          alt="inzahlungnahme icon"
          class="h-[3rem]"
        />
        <p>Inzahlungnahme des alten Fahrzeugs</p>
      </div>

      <div class="bg-light-blue p-6 flex items-center gap-4 rounded-md">
        <img
          src="@/assets/images/finanzdienstleistungen-icon.png"
          alt="finanzdienstleistungen icon"
          class="h-[3rem]"
        />
        <p>Finanzdienstleistungen</p>
      </div>

      <div class="bg-light-blue p-6 flex items-center gap-4 rounded-md">
        <img
          src="@/assets/images/zulassungsservice-icon.png"
          alt="zulassungsservice icon"
          class="h-[3rem]"
        />
        <p>Zulassungsservice, An- und Abmeldung</p>
      </div>

      <div class="bg-light-blue p-6 flex items-center gap-4 rounded-md">
        <img
          src="@/assets/images/garantie-icon.png"
          alt="garantie icon"
          class="h-[3rem]"
        />
        <p>Bis zu 24 Monate Gebrauchtwagengarantie</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AngebotSection",
};
</script>

<style lang="scss" scoped></style>
