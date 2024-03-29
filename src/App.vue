<template>
  <div id="start-page" class="relative">
    <img
      src="@/assets/images/background-car.png"
      alt="photo car"
      class="absolute -z-10 opacity-35"
    />

    <header class="flex items-center justify-between p-16">
      <img
        src="@/assets/images/vtg-logo.png"
        alt="vtg musli logo"
        class="w-72"
      />
      <!-- <img
        src="@/assets/images/vtg_mid_rahmen.png"
        class="w-56"
        alt="vtg musli logo"
      /> -->
      <div class="flex gap-6">
        <a class="cursor:pointer hover:text-light-orange" href="#angebot-page"
          >Angebot</a
        >
        <a
          class="cursor:pointer hover:text-light-orange"
          href="#finanzierung-page"
          >Finanzierung & Garantie</a
        >
        <a class="cursor:pointer hover:text-light-orange" href="#about"
          >Über Uns</a
        >
        <a class="cursor:pointer hover:text-light-orange" href="#contact"
          >Kontakt</a
        >
        <a class="cursor:pointer hover:text-light-orange" href="#reviews"
          >Bewertung</a
        >
      </div>
    </header>

    <div class="mx-16">
      <h1>Automobile</h1>
      <h2 class="mt-10">
        Entspannt unterwegs:<br />Qualität für sichere Fahrten!
      </h2>
      <a class="inline-block" href="https://home.mobile.de/VTGMUSLIAUTOMOBILE#ses" target="_blank">
      <div class="koho mt-16 h-[16rem] w-[24rem] relative flex justify-center">
        <!-- <svg
          class="absolute top-0 left-0 m-0 p-0"
          width="24rem"
          height="24rem"
          viewBox="0 0 72 72"
          id="emoji"
          xmlns="http://www.w3.org/2000/svg"
          fill="#004D78"
          transform="rotate(90)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="color"></g>
            <g id="line">
              <path
                d="M56,36 C56,52.016 47.046,65 36,65 C24.954,65 16,52.016 16,36 C16,19.984 24.954,7 36,7 C47.046,7 56,19.984 56,36 z"
              ></path>
              <path
                stroke="#004D78"
                stroke-width="2"
                d="M56,35.957 C56.035,51.973 47.109,64.977 36.063,65.001 C25.017,65.025 16.034,52.06 16,36.043 C15.965,20.027 24.891,7.023 35.937,6.999 C46.983,6.975 55.966,19.94 56,35.957 z"
              ></path>
            </g>
          </g>
        </svg> -->

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
          <p class="text-5xl">
            <p >mobile<span class="text-light-orange">.</span>de</p>
          </p>
        </div>
      </div>
      </a>
    </div>
  </div>

  <div id="angebot-page" class="mt-[22rem] mx-16">
    <h1>Unser Angebot</h1>
    <div class="grid grid-cols-2 gap-y-8 gap-x-4 mt-16">
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

  <div id="finanzierung-page" class="mx-16 mt-40">
    <h1>Finanzierung & Garantie</h1>
    <div class="my-40 grid grid-cols-2 gap-x-10 gap-y-40 items-center relative">
      <a href="https://realgarant.com/de-de/" target="_blank">
        <img
          src="@/assets/images/realgarant.png"
          alt="logo Real Garant"
          class="max-h-40 hover:scale-110 duration-300"
      /></a>
      <a href="https://www.huk.de/" target="_blank"
        ><img
          src="@/assets/images/huk_coburg.png"
          alt="logo Huk Coburg"
          class="max-h-40 mx-auto hover:scale-110 duration-300"
      /></a>
      <a href="https://www.santander.de/privatkunden/" target="_blank">
        <img
          src="@/assets/images/santander_carcredit.png"
          alt="logo Santander"
          class="max-h-40 hover:scale-110 duration-300"
      /></a>
      <a href="https://www.multipart.de/" target="_blank"
        ><img
          src="@/assets/images/multipart.png"
          alt="logo multipart"
          class="max-h-40 mx-auto hover:scale-110 duration-300"
      /></a>
    </div>
  </div>

  <div id="about" class="bg-light-blue px-16">
    <h1 class="pt-16">Über Uns</h1>
    <p class="pt-24 text-[2rem]">Wilkommen auf unserer Homepage!</p>
    <p class="pt-20 text-[2rem] max-w-[1300px]">
      Wir unterstützen Sie gerne bei der Suche nach Ihrem neuen Fahrzeug. Mit
      über 20 Jahren Erfahrung in der Automobilbranche sind wir bestens
      gerüstet, um Ihre Anforderungen zu erfüllen.<br />
      Bitte beachten Sie, dass unsere Fahrzeuge auf der Website
      <a
        href="https://home.mobile.de/VTGMUSLIAUTOMOBILE#ses"
        target="_blank"
        class="text-light-orange cursor-pointer"
        >mobile.de</a
      >
      gelistet sind, damit Sie bequem von zuhause aus nach Ihrem Wunschauto
      suchen können.
    </p>
    <p class="py-20 text-[2rem]">
      Herzliche Grüße,<br />
      das Team von VTG-Musli Automobile.
    </p>
  </div>

  <div id="contact">
    <h1 class="p-16">Kontakt</h1>
    <div class="grid grid-cols-2 gap-x-8 text-[2rem]">
      <div class="bg-light-blue p-16 flex flex-col justify-around">
        <div class="flex items-center gap-4">
          <img
            src="@/assets/images/mail-icon.png"
            alt="mail icon"
            class="h-[3rem]"
          />
          <a href="mailto:info@vtg-musli.de" class="text-blue-link"
            >info@vtg-musli.de</a
          >
        </div>

        <div class="flex items-center gap-4">
          <img
            src="@/assets/images/phone-icon.png"
            alt="phone icon"
            class="h-[3rem]"
          />
          <a href="tel:+491627549001" type="phone">+49 162 7549001</a>
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
            class="cursor-pointer text-blue-link"
            >mobile.de</a
          >
        </div>
      </div>

      <div class="bg-light-blue p-16 text-[2rem] flex flex-col gap-10">
        <p><b>Öffnungszeiten</b></p>

        <p>
          Montag - Freitag<br />
          09:30 - 12:30 Uhr & 14:00 - 18:00 Uhr
        </p>

        <p>
          Samstag<br />
          09:30 - 12:30 Uhr
        </p>
      </div>
    </div>

    <div class="m-16">
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
          height="760"
          class="mt-16"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="google embet code"
        ></iframe>
      </div>
    </div>
  </div>

  <div id="reviews" class="mx-16">
    <h1 class="my-16">Bewertungen</h1>
    <div class="flex gap-8 items-end">
      <div>
        <div class="text-[4.5rem] text-gray-500">5,0</div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
        </div>
      </div>
      <a
        href="https://www.google.com/search?sca_esv=391f93f6c7aeb7e3&rlz=1C5CHFA_enDE815DE815&hl=de-SE&uds=AMwkrPtyB8MsmozA4Lwzqy2G2HCuETK9muM7XIxihiJmpK80mr01QGApq4tXP1LDaB_uKpKA-N8r7WKWoo-cpQFnJX3nK7OWyMxLwyJ2g80bpfVC2LR-c6dDp2xBT2FHVa2zM3wiTdE2-qOTX02Q_5idJUXcItFYsA&si=AKbGX_oXOTjHK3vNPxrwAU4tsC2W_rsdJDrrSHpqUAOdbOh1q4o4xJ2y447s0exXN-t2Q4Bcx707FvmVmaDBNT-0PxmFOwNnaMGJqoWy2AaPltj2rSjBEZU%3D&q=VTG-Musli+Automobile+Rezensionen&sa=X&ved=2ahUKEwj4pea4xpeFAxVlAxAIHcSSBREQ3PALegQIUxAF&biw=1225&bih=968&dpr=1"
        target="_blank"
        class="text-[2rem] text-blue-link leading-none"
        >Google Bewertungen</a
      >
    </div>

    <div class="grid grid-cols-2 gap-x-40">
      <div class="mt-16">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
        </div>
        <p class="mt-4">Ich bin sehr positiv Beeindruckt.</p>
        <br />
        <p>
          Die Kommunikation verläuft absolut unkompliziert und ist vollkommen in
          unserem Jahrhundert angekommen, sprich: online ist hier kein
          Fremdwort.
        </p>
        <br />
        <p>
          Das gesamte Personal ist sehr freundlich und zuvorkommend. Auch nach
          Abschluss des Kaufvertrags ist der Kunde offenbar tatsächlich immer
          noch König, das gegebene Wort wird eingehalten und die entsprechenden
          Arbeiten ausgesprochen unkompliziert durchgeführt.
        </p>
        <br />
        <p>Ich empfehle dieses Autohaus zu 100% weiter.</p>
      </div>

      <div class="mt-16">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
        </div>
        <p class="mt-4">
          Für Herrn Musli und seinem Team ist das Wort "Nein" ein Fremdwort.
        </p>
        <br />
        <p>
          Terminfindung, Hol und Bringservice, TÜV, Hauptuntersuchung, An und
          Abmeldung und und und, hier bleibt kein Wunsch unerfüllt. Alle
          Parteien sind sehr freundlich und zügig, auch nach dem Verkauf sind
          kleinere Serviceleistungen kein Problem und immer selbstverständlich.
        </p>
        <br />
        <p>Hier bekommt man einen Top Service geboten.</p>
      </div>

      <div class="mt-16">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
        </div>
        <p class="mt-4">
          Sehr empfehlenswerter, kompetenter Händler, der mir ein sehr gutes,
          erstes Auto verkauft hat - vertrauenswürdig und super
          Preis-Leistungs-Verhältnis.<br />
          Hat alles für mich erledigt und mir den Wagen in einem top Zustand
          übergeben. Ich kann ihn mit gutem Gewissen weiterempfehlen und würde
          jeder Zeit wieder mein Auto dort kaufen.
        </p>
      </div>

      <div class="mt-16">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
        </div>
        <p class="mt-4">
          Nirgends einen Vertrauenswürdigeren Autohändler kennengelernt! Haben
          einen klasse Golf VI gekauft, Hr. Musli ist uns mit allem sehr
          entgegengekommen. Auch mit der Autoüberführung war er behilflich, da
          wir nicht aus Bremerhaven kommen. Hat alles reibungslos und
          unkompliziert geklappt, jederzeit zu empfehlen!
        </p>
      </div>

      <div class="mt-16">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
        </div>
        <p class="mt-4">
          Lieber Herr Musli, wir haben uns von Beginn an sehr kompetent und
          zuverlässig von Ihnen beraten gefühlt. Alle vereinbarten Reparaturen,
          die Aufbereitung und die TÜV-Prüfung haben Sie mit Ihrem Team zu
          unserer vollen Zufriedenheit erledigt. Sie wurden uns von einem
          anderen seriösen Händler empfohlen. Ihre lange Erfahrung in namhaften
          Vertragswerkstätten merkt man sofort! Ich kann mir gut vorstellen,
          auch mein nächstes Auto bei Ihnen zu kaufen! Vielen Dank und weiterhin
          viel Erfolg!
        </p>
      </div>

      <div class="mt-16">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="#fab005"
            stroke="#fab005"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
        </div>
        <p class="mt-4">
          Der Herr Musli ist sehr freundlich, hat uns alles um das Auto erklärt,
          einen vernünftigen Preis eines Autos in hervorragendem Zustand
          angeboten und wir haben den Kauf (nach einer kostenlosen Probefahrt)
          problemlos abgeschlossen. Alles wurde professionell behandelt, das
          Auto hat bevor der Übergabe einen neuen TüV bekommen und die VTG hat
          sich auch um die Zulassung dementsprechend gekümmert. Eine
          Gewährleistung ist natürlich auch dabei, und wie alles bisher lief
          glaube ich, dass die auf dem selben Niveau sein wird. Mit dem Auto bin
          ich übrigens ebenso zufrieden! Würde ihn jedem empfehlen!
        </p>
      </div>
    </div>
  </div>

  <footer class="bg-dark-blue text-white py-16 mt-32 flex justify-center">
    <a href="https://home.mobile.de/VTGMUSLIAUTOMOBILE#imprint" target="_blank"
      >Impressum & Rechtliches</a
    >
  </footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      elipse_fill_color: "#004d78e6",
    };
  },
};
</script>
