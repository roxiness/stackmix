<script>
  import { language } from "../components/Lang.svelte";
  $: lang = $language.short;
  const dict = {
    en: "Welcome",
    de: "Herzlich willkommen",
    fr: "Bienvenue",
  };
</script>

{#if lang === "en"}
  <h1>Internationalization</h1>
  <p>
    In this example we're using <code>urlTransform</code> to store and fetch the current language ID in/from the url. We
    could also do this with a dynamic folder in the root, eg. <code>src/pages/[language]</code>.
  </p>
  <p>
    How localized data should be stored and resolved is entirely up to you. For simplicity, we've kept it all in one
    file.
  </p>
{:else if lang === "de"}
  <h1>Internationalisierung</h1>
  <p>
    In diesem Beispiel verwenden wir <code>urlTransform</code>, um die aktuelle Sprach-ID in / aus der URL zu speichern
    und abzurufen. Wir könnten dies auch mit einem dynamischen Ordner im Stammverzeichnis tun, z.
    <code>src/pages/[language]</code>.
  </p>
  <p>
    Wie lokalisierte Daten gespeichert und aufgelöst werden sollen, liegt ganz bei Ihnen. Der Einfachheit halber haben
    wir alles in einer Datei gespeichert.
  </p>
{:else if lang === "fr"}
  <h1>Internationalisation</h1>
  <p>
    Dans cet exemple, nous utilisons <code>urlTransform</code> pour stocker et récupérer l'ID de langue actuel dans / depuis l'url.
    Nous pourrions également le faire avec un dossier dynamique à la racine, par exemple. <code>src/pages/[language]</code>.
  </p>
{/if}
