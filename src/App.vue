<template>
  <div id="start-page" class="relative">
    <img
      src="@/assets/images/background-car.png"
      alt="photo car"
      class="absolute -z-10 opacity-35"
    />

    <header class="flex justify-between">
      <img src="@/assets/images/vtg-logo.png" alt="vtg musli logo" />
      <div>
        <a href="">Angebot</a>
        <a href="">Finanzierung & Garantie</a>
        <a href="">Über Uns</a>
        <a href="">Kontakt</a>
        <a href="">Bewertung</a>
      </div>
    </header>
    <div class="mx-10">
      <h1>Automobile</h1>
      <h2>Entspannt unterwegs:<br />Qualität für sichere Fahrten!</h2>
      <div>
        <p>Unsere Fahrzeuge:</p>
        <p><a href="">mobile<span>.</span>de</a></p>
      </div>
    </div>
  </div>

  <div id="angebot-page" class="grid grid-cols-2 gap-y-4 gap-x-8">
    <div>
      <div>icon</div>
      <p>Das passende Fahrzeug für Sie</p>
    </div>

    <div>
      <div>icon</div>
      <p>Professionelle Fahrzeugaufbereitung</p>
    </div>

    <div>
      <div>icon</div>
      <p>Ausgebiege Probefahrt</p>
    </div>

    <div>
      <div>icon</div>
      <p>Inzahlungnahme des alten Fahrzeugs</p>
    </div>

    <div>
      <div>icon</div>
      <p>Finanzdienstleistungen</p>
    </div>

    <div>
      <div>icon</div>
      <p>Zulassungsservice, An- und Abmeldung</p>
    </div>

    <div>
      <div>icon</div>
      <p>Bis zu 24 Monate Gebrauchtwagengarantie</p>
    </div>
  </div>

  <div
    id="finanzierung-garantie"
    class="grid grid-cols-2 gap-x-10 gap-y-10 items-center"
  >
    <img
      src="@/assets/images/realgarant.png"
      alt="logo Real Garant"
      class="max-h-20 mx-auto"
    />
    <img
      src="@/assets/images/huk_coburg.png"
      alt="logo Huk Coburg"
      class="max-h-20 mx-auto"
    />
    <img
      src="@/assets/images/santander_carcredit.png"
      alt="logo Santander"
      class="max-h-20 mx-auto"
    />
    <img
      src="@/assets/images/multipart.png"
      alt="logo multipart"
      class="max-h-20 mx-auto"
    />
  </div>

  <div id="about-page">
    <h1>Über Uns</h1>
    <p>Wilkommen auf unserer Homepage</p>
    <p>
      Wir unterstützen Sie gerne bei der Suche nach Ihrem neuen Fahrzeug. Mit
      über 20 Jahren Erfahrung in der Automobilbranche sind wir bestens
      gerüstet, um Ihre Anforderungen zu erfüllen.<br />
      Bitte beachten Sie, dass unsere Fahrzeuge auch auf der Website
      <span>mobile.de</span>
      gelistet sind, damit Sie bequem von zuhause aus nach Ihrem Wunschauto
      suchen können.
    </p>
    <p>
      Herzliche Grüße,<br />
      das Team von VTG-Musli Automobile.
    </p>
  </div>

  <div id="contact">
    <h1>Kontakt</h1>
    <div class="grid grid-col-2">
      <div>
        <div>
          <div>icon</div>
          <a href="" type="mail">info@vtg-musli.de</a>
        </div>

        <div>
          <div>icon</div>
          <a href="" type="phone">+49 162 7549001</a>
        </div>

        <div>
          <div>icon</div>
          <a href="" type="mail">mobile.de</a>
        </div>
      </div>

      <div>
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

    <div>
      <div>icon</div>
      <p>Alte Geesteschleife 2, DE-27576 Bremerhaven</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.1023428714443!2d8.597124299999999!3d53.555940500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6b107bad24647%3A0xb56cf34e16d2241!2sVTG-Musli%20Automobile!5e0!3m2!1sde!2sse!4v1711524128508!5m2!1sde!2sse"
        width="100%"
        height="760"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

  <div id="reviews">
    <h1>Bewertungen</h1>
    <div>
      <div>
        <div>5,0</div>
        <div>5 Stars go here</div>
      </div>
      <p>Google Bewertungen</p>
    </div>

    <div class="grid grid-col-2">
      <div>
        <div>Sterne + 3 months ago</div>
        <p>Ich bin sehr positiv Beeindruckt.</p>
        <p>
          Die Kommunikation verläuft absolut unkompliziert und ist vollkommen in
          unserem Jahrhundert angekommen, sprich: online ist hier kein
          Fremdwort.
        </p>
        <p>
          Das gesamte Personal ist sehr freundlich und zuvorkommend. Auch nach
          Abschluss des Kaufvertrags ist der Kunde offenbar tatsächlich immer
          noch König, das gegebene Wort wird eingehalten und die entsprechenden
          Arbeiten ausgesprochen unkompliziert durchgeführt.
        </p>
        <p>Ich empfehle dieses Autohaus zu 100% weiter.</p>
      </div>

      <div>
        <div>Sterne + 4 years ago</div>
        <p>
          Sehr empfehlenswerter, kompetenter Händler, der mir ein sehr gutes,
          erstes Auto verkauft hat - vertrauenswürdig und super
          Preis-Leistungs-Verhältnis.<br />
          Hat alles für mich erledigt und mir den Wagen in einem top Zustand
          übergeben. Ich kann ihn mit gutem Gewissen weiterempfehlen und würde
          jeder Zeit wieder mein Auto dort kaufen.
        </p>
      </div>

      <div>
        <div>Sterne + 4 months ago</div>
        <p>
          Sehr empfehlenswerter, kompetenter Händler, der mir ein sehr gutes,
          erstes Auto verkauft hat - vertrauenswürdig und super
          Preis-Leistungs-Verhältnis.<br />
          Hat alles für mich erledigt und mir den Wagen in einem top Zustand
          übergeben. Ich kann ihn mit gutem Gewissen weiterempfehlen und würde
          jeder Zeit wieder mein Auto dort kaufen.
        </p>
      </div>

      <div>
        <div>Sterne + 5 months ago</div>
        <p>
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

      <div>
        <div>Sterne + vor 3 Monaten</div>
        <p>
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

      <div>
        <div>Sterne + vor 3 Monaten</div>
        <p>
          Für Herrn Musli und seinem Team ist das Wort "Nein" ein Fremdwort.
          Terminfindung, Hol und Bringservice, TÜV, Hauptuntersuchung, An und
          Abmeldung und und und, hier bleibt kein Wunsch unerfüllt. Alle
          Parteien sind sehr freundlich und zügig, auch nach dem Verkauf sind
          kleinere Serviceleistungen kein Problem und immer selbstverständlich.
          Hier bekommt man einen Top Service geboten.
        </p>
      </div>

      <div>
        <div>Sterne + vor 3 Monaten</div>
        <p>
          Nirgends einen Vertrauenswürdigeren Autohändler kennengelernt! Haben
          einen klasse Golf VI gekauft, Hr. Musli ist uns mit allem sehr
          entgegengekommen. Auch mit der Autoüberführung war er behilflich, da
          wir nicht aus Bremerhaven kommen. Hat alles reibungslos und
          unkompliziert geklappt, jederzeit zu empfehlen!
        </p>
      </div>

      <div>
        <div>Sterne + vor einem Jahr</div>
        <p>
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

  <footer>
    <a href="Impressum"></a>
    <a href="Datenschutz"></a>
    <a href="Haftung für Inhalte & Links"></a>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#background-image {
  background-image: url("@/assets/images/background-car.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: rgb(128, 128, 128, 0.3);
  height: 100vh;
}
</style>
