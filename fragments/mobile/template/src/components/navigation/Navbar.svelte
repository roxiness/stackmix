<script>
    import { layout, isActive, url } from '@roxi/routify'
    import Overlay from './Overlay.svelte'
</script>

<Overlay>
    <nav>
        {#each $layout.children as { path, title }}
            <a href={$url(path)} class:is-active={$isActive(path)}>{title}</a>
        {/each}
    </nav>
</Overlay>
