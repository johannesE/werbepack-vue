import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

import Massnahmen from './components/Massnahmen.vue'
import Massnahme from './components/Massnahme.vue'
import VeeValidate, {Validator} from 'vee-validate';
import de from 'vee-validate/dist/locale/de';

const routes = [
    {
      path: '/',
      component: Massnahmen,
      name: 'massnahmen',
    },
    {
      path: '/:title',
      component: Massnahme
    },
  ]
;

Vue.use(VueRouter);
Vue.filter('format_id', function (value) {
  return (value || value === 0)
    ? value.toString().toLowerCase().replace(/ /g, '')
    : ''
});


const router = new VueRouter({
  routes: routes,
});

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('de', de);
Vue.use(VeeValidate, {
  locale: 'de'
});


let massnahmen = [{
  title: "Logo",
  kreation: 'Ein <strong>bärenstarker Auftritt</strong> bedingt ein starkes Logo. Mit Rücksicht auf die Gesetze der Formsprache und Farbpsychologie kreieren wir ein Logo, welches Deine Firma repräsentiert.',
  produktion: 'Du erhältst Dein Logo oder Deine Icons als <strong>skalierbare Vektorengrafik</strong> (svg) in allen gängigen Farbmodellen und als schwarz-weisse Version. Auch die Ablieferung von pixelorientierten Formaten für Web und Social Media Anwendungen ist inklusive.',
  src: 'http://werbepack.ch/wp-content/uploads/2018/01/Logo.png'
  },
  {
    title: "Bekleidung",
    kreation: 'Vermittle ein harmonisches Gesamtbild Deiner Firma mit einheitlicher Kleidung. Als Zeichen des gelebten Gemeinschaftsgefühls steigerst Du die Motivation Deiner Mitarbeiter und begeisterst Geschäftspartner und Kunden. Wir veredeln T-Shirts und Poloshirts, Caps, Hemden und Blusen mit direktem Druck oder mit hochwertiger Stickerei. Je nach Branche auch berufsspezifische Arbeitskleider bestehend aus Hose, Oberteil und Jacke.',
    produktion: 'Je nach Textil und Veredelungsart hast Du die Wahl zwischen Druck: 20 „T-Shirts beidseitig bedruckt“ oder 15 „Poloshirts beidseitig bedruck“. Oder Stickerei: 15 „Caps vorne bestickt“ oder 8 „Hemden/Blusen bestickt“. Je nach Branche kannst Du stattessen zwei „Komplet-Berufskleider bestickt“ (Oberteil und Jacke bestickt inkl. passende Hose) wählen. Farbe, Grösse und Ausführung der einzelnen Textilien aus unserem Katalog nach Wahl. Stickerei an max. 2 Positionen pro Textil (ausser bei Caps). Die Digitalisierung der Stickdaten ist inkludiert.',
    src: 'http://werbepack.ch/wp-content/uploads/2018/01/Bekleidung.png'
  },
  {
    title: "Webseite",
    kreation: 'Die Zugriffe aufs Web folgen zunehmend über mobile Geräte. Wir gestalten Dir eine dynamische, barrierefreie Webseite, die den modernen Zeitgeist trifft. Dank Responsive Design kannst Du geräteübergreifend und nachhaltig kommunizieren. Das Webdesign mit Inhalte der Start- und Folgeseiten sind inklusive. Weitere Inhalte und Aktualisierungen kannst Du jederzeit ganz einfach im intuitiv zu bedienenden CMS erarbeiten.',
    produktion: 'Domain-Registrierung und Online-Aufsetzen der Webseite, Content-Management-System mit erweiterbaren Plug-Ins und sicherer Betrieb durch SSL-Verschlüsselung sind in dieser Leistung dabei. Inkl. Basis Search Engine Optimization durch unseren Google-Partner. Hinweis: Optionale folgekosten für Hosting- und System: CHF 200.-/Jahr.',
    src: 'http://werbepack.ch/wp-content/uploads/2018/01/Webseite.png'
  },
  {
    title: "Beschriftung",
    kreation: 'Clever eingesetzte Beschriftungen springen ins Auge und verstärken Deine Botschaft. Räume können optisch vergrössert oder verkleinert werden. Ob auf Schaufenster, Fahrzeuge oder die Kennzeichnung Deines Firmengebäudes und Deiner Empfangsräume, nutze die Pluspunkte für Dich. Wir setzen unser Knowhow gekonnt für Dich um.',
    produktion: 'Beschriftung aus hochwertig gegossenen Folien (konturgeschnitten) inkl. Vor- und Montagearbeiten. Max. 10 Quadratmeter ohne Trägermaterial (also z. B. direkt auf Schaufenster oder Fahrzeuge) oder 3 Quadratmeter mit Trägermaterial (je nach Anwendung z. B. auf Aluminium-Platte, Plexiglas o. ä.).',
    src: 'http://werbepack.ch/wp-content/uploads/2018/01/Beschriftung.png'
  },
  {
    title: "Briefschaften",
    kreation: 'Briefschaften sind Basiselemente, um die Identität Deiner Firma überzeugend und glaubwürdig zu repräsentieren. Wir gestalten Dein Firmenauftritt mit Visitenkarten, Briefpapiere und Couverts und stellen damit eine optimale Ausstrahlung sicher. Dabei verwenden wir Dein bestehendes Logo, oder Du wählst unsere Logogestaltung, bzw. das Redesign aus.',
    produktion: 'Je 1000 Stück Briefpapier A4, Couverts C5 und Visitenkarten 85 x 55 mm, vierfarbig gedruckt auf Qualitätspapier. Die Visitenkarten kannst Du auf verschiedene Mitarbeiter-Versionen splitten, also z.B. 2 x 500 Exemplare. Du erhältst auch eine Word-Vorlage für den rein digitalen Versand Deiner Korrespondenz.',
    src: 'http://werbepack.ch/wp-content/uploads/2018/01/Briefschaften.png'
  },
  {
    title: "Messe Auftritt",
    kreation: 'Strahle Professionalität aus mit einem starken Auftritt. Perfekt für Deine Messen, Verkaufsstände, Empfangs- und Büroräume – eben immer dort, wo Du ein portables und effizientes Info- und Werbesystem benötigst. Wir gestalten Dir Beachflags, Roll-Ups, Kundenstopper oder eine Rückwand. Jeweils schnell und einfach aufgebaut, verfehlt Dein Auftritt nicht seine Wirkung.',
    produktion: 'Wahlweise drei „Beachflags Wing“ mit Druck auf 110g/m2 Fahnentuch der Grösse 44 x 196 cm oder zwei „Premium Roll-Ups“ im Format 100 x 200 cm mit Druck auf 500g/m2 robuste PVC-Blache. Stattdessen kannst Du auch zwei „Kundenstopper für DIN A1 Plakate“ (594 x 841 mm) aus Aluminium wählen, oder eine „Rückwand gerade oder gebogen“ aus hochwertigem Dekotex Stretch im Format 224 x 225 cm. Alle Varianten sind immer inklusive System und Druck.',
    src: 'http://werbepack.ch/wp-content/uploads/2018/01/Messe-Auftritt.png'
  },
  {
    title: "Visual",
    kreation: 'Die aktive Gestaltung des Firmenimages ist heute wichtiger denn je. Wir entwickeln Dir ein professionelles Visual. Sei es für Inserate in Zeitungen und Zeitschriften, als Plakat, als Präsent in Deiner Webseite und Social Media Kanäle oder als Display-Werbung im öffentlichen Verkehr – die Einsatzmöglichkeiten des Visuals sind vielfältig.',
    produktion: 'Idee/Gestaltung inkl. Kosten für Bilder und/oder Illustrationen (Recherche, Bearbeitung, Nutzungsrechte). Datenaufbereitung für die Produktion für allfällige Drucksachen sowie Formatanpassungen für den vielfältigen digitalen Einsatz sind inklusive.',
    src: 'http://werbepack.ch/wp-content/uploads/2018/01/Visual.png'
  },
  {
    title: "Online Marketing",
    kreation: 'Du produzierst eigene Inhalte für deine Social Media Kampagne. Dafür legen wir Dir den Grundstein fest mit einem Konzept und einer Content Marketing Strategie. Wir setzen Deine Social Media Kanäle auf und laden die ersten hochwertigen Visuals hoch. Bei Bedarf mit Hilfe eines Content-Redaktionssystem.',
    produktion: 'Eröffnung/Optimierung der Social Media Kanäle: Facebook, Google+, Erarbeitung Content Strategie inkl. Redaktionsplan und ersten Postings. Wenn sinnvoll, Aufsetzen eines Redaktions-Systems, welches ein teamübergreifendes, automatisiertes Posting ermöglicht. Folgekosten Redaktions-System ab CHF 250.-/Monat bei eigener Abwicklung. Bei Posting-Erstellung durch uns CHF 800.-/Monat.',
    src: 'http://werbepack.ch/wp-content/uploads/2018/01/Online-Kampagne.png'
  },
  {
    title: "Druck",
    kreation: 'Ein professioneller Druck macht den Unterschied. Drucksachen erfreuen den Empfänger und vermitteln einen bleibenden Eindruck. Die richtige Wahl des Papieres, des Formates und der Farben ist dabei essenziell. Darum kreieren wir Drucksachen die Deine Firma wirkungsstark vertreten bei exzellenter Ausführung.',
    produktion: 'In einem gemeinsamen Gespräch ermitteln wir für Dich die optimalsten Drucksachen und bestimmen deren genaue Ausführung. Im Pauschalpreis inkludiert sind Falzflyer, Broschüren, Prospekte, Präsentationsmappen mit Visitenkartenschlitz, Mailings oder Einladungskarten bis zu einem maximalen Umfang von acht Seiten A4 vierfarbig beidseitig bedruckt. Je nach gewählter Papier-, Veredelungs- und Personalisierungs-Variante in Auflagen von 100 bis 1000 Stück.',
    src: 'http://werbepack.ch/wp-content/uploads/2018/01/Druck.png'
  },
];

import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    massnahmen: massnahmen,
    massnahme: {massnahmeSelected: false}
  },
  mutations: {
    toggleMassnahme(state, massnahme) { store.massnahme = massnahme; Vue.set(store.massnahme, 'selected', !store.massnahme.selected); },
    showMassnahme(state, massnahme) { store.massnahme = massnahme },
  }
});

window.onload = function () {
  const massnahmenApp = new Vue({
    router: router,
    render: h => h(App),
    store: store,
    el: ('#massnahmen-app')
  })
};
