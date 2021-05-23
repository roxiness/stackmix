<script>
    import { components } from '@roxi/routify'
    const entriesFolder = $components.find(
        node => node.path === '/posts/entries',
    )
    const entries = entriesFolder.children.filter(
        node => !node.meta.supersecret,
    )
</script>

{#each entries as post}
    <article>
        {#await post.component then Post}
            <svelte:component this={Post} />
        {/await}
    </article>
{/each}

<style>
    article:not(:first-of-type) {
        margin: 96px 0;
    }
    article {
        padding: 56px 64px;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
    }
</style>
