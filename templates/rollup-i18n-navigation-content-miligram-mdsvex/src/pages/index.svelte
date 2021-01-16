<script>
  import { language } from '../components/Lang.svelte'
  const dict = {
    en: 'Welcome',
    de: 'Herzlich willkommen',
    fr: 'Bienvenue',
  }
</script>

<h1>{dict[$language.short]}</h1>
