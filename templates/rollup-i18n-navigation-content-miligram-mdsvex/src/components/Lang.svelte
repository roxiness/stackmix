<script context="module">
  import { writable, get } from 'svelte/store'
  import { page } from '@roxi/routify'

  const languages = {
    en: { short: 'en', long: 'english', default: true },
    fr: { short: 'fr', long: 'french' },
    de: { short: 'de', long: 'german' },
  }

  const language = writable(languages['en'])

  const urlTransform = {
    apply: (url) => {
      const lang = get(language)
      const prefix = !lang.default ? `/${lang.short}` : ''
      return prefix + url
    }, //external URL,
    remove: (url) => {
      const [, first, ...rest] = url.split('/')
      if (languages[first]) {
        language.set(languages[first])
        return [, ...rest].join('/')
      } else return url
    },
  }

  export { languages, language, urlTransform }
</script>

<script>
  import { goto, url } from '@roxi/routify'
  const handleChange = () => {
    $goto($page.path)
  }
</script>

<select bind:value={$language} on:change={handleChange}>
  {#each Object.values(languages) as lang}
    <option value={lang}>{lang.long}</option>
  {/each}
</select>
