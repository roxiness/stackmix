<script context="module">
    import { writable, get } from 'svelte/store'
    import { page } from '@roxi/routify'

    const languages = {
        en: { short: 'en', long: 'english', default: true },
        fr: { short: 'fr', long: 'french' },
        de: { short: 'de', long: 'german' },
    }

    // let's use a store for reactivity
    const language = writable(languages['en'])

    const urlTransform = {
        apply: url => {
            /**
             * external URL
             * if the selected language is not the default language,
             * we want to use the language as an URL prefix
             */
            const lang = get(language)
            const prefix = !lang.default ? `/${lang.short}` : ''
            return prefix + url
        },
        remove: url => {
            /**
             * internal URL
             * if the first url fragment matches a language,
             * we're gonna strip the fragment
             */
            const [, urlPrefix, ...rest] = url.split('/')
            if (languages[urlPrefix]) {
                language.set(languages[urlPrefix])
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
