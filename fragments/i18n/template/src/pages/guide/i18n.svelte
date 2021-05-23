<script>
    import { language } from '../../components/Lang.svelte'
    $: lang = $language.short
</script>

{#if lang === 'en'}
    <h1>Internationalization</h1>
    <p>
        In this example we're using <code>urlTransform</code> to store and fetch
        the current language ID in/from the url. We could also do this with a
        dynamic folder in the root, eg. <code>src/pages/[language]</code>.
    </p>
    <p>
        How localized data should be stored and resolved is entirely up to you.
        For simplicity, we've kept it all in one file.
    </p>
    <p class="note">
        Click the language dropdown to change the language of this page.
    </p>
{:else if lang === 'de'}
    <h1>Internationalisierung</h1>
    <p>
        In diesem Beispiel verwenden wir <code>urlTransform</code>, um die
        aktuelle Sprach-ID in / aus der URL zu speichern und abzurufen. Wir
        könnten dies auch mit einem dynamischen Ordner im Stammverzeichnis tun,
        z.
        <code>src/pages/[language]</code>.
    </p>
    <p>
        Wie lokalisierte Daten gespeichert und aufgelöst werden sollen, liegt
        ganz bei Ihnen. Der Einfachheit halber haben wir alles in einer Datei
        gespeichert.
    </p>
    <p class="note">
        Klicken Sie auf die Sprach-Dropdown-Liste, um die Sprache dieser Seite
        zu ändern.
    </p>
{:else if lang === 'fr'}
    <h1>Internationalisation</h1>
    <p>
        Dans cet exemple, nous utilisons <code>urlTransform</code> pour stocker
        et récupérer l'ID de langue actuel dans / depuis l'url. Nous pourrions
        également le faire avec un dossier dynamique à la racine, par exemple.
        <code>src/pages/[language]</code>.
    </p>
    <p>
        La manière dont les données localisées doivent être stockées et résolues
        dépend entièrement de vous. Pour plus de simplicité, nous avons tout
        gardé en un déposer.
    </p>
    <p class="note">
        Cliquez sur la liste déroulante des langues pour changer la langue de
        cette page.
    </p>
{/if}

<style>
    .note {
        background: #f5f5f5;
        padding: 16px 24px;
    }
</style>
