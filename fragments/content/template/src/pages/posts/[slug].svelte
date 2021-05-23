<script>
    import { components } from '@roxi/routify'
    export let slug

    $: postsFolder = $components.find(({ meta }) => meta.name === 'postEntries')
    $: Post = postsFolder.children.find(
        node => node.path.split('/').pop() === slug,
    )
</script>

<!-- routify:options index=300 -->
<div class="container">
    {#if Post}
        {#await Post.component then page}
            <svelte:component this={page} />
        {/await}
    {/if}
</div>
