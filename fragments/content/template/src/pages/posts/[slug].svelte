<script>
  import { components } from "@roxi/routify";
  export let slug;

  $: postsFolder = $components.find(({ meta }) => meta.name === "postEntries");
  $: Post = postsFolder.children.find((node) => node.path.endsWith(slug));
  
</script>

{#if Post}
  {#await Post.component then page}
    <svelte:component this={page} />
  {/await}
{/if}
