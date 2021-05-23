<script>
    import Navigation from './Navigation.svelte'
    import { url } from '@roxi/routify'
    export let children
</script>

<nav>
    <a href={$url('/')}>
        <h3>My App</h3>
    </a>
    <Navigation {children} />
</nav>
