<script>
  import { layout, components, url } from "@roxi/routify";
  $: postsFolder = $components.find(({ meta }) => meta.name === "postEntries");
  $: posts = postsFolder.children.filter((post) => !post.meta.supersecret);
</script>

<dl>
  {#each posts as { meta, title, path }}
    <dt>
      <a href='{$url("./:slug", { slug: path.split("/").pop() })}'>{title}</a>
    </dt>
  {/each}
</dl>
