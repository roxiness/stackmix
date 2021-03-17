<script>
  import { components, url } from "@roxi/routify";
  $: postsFolder = $components.find(({ meta }) => meta.name === "postEntries");
  $: posts = postsFolder.children.filter((post) => !post.meta.supersecret);
  $: console.log(posts);
</script>

<!-- routify:options index=200 -->
<div class="container">
  <h1>Posts</h1>
  <div class="posts">
    {#each posts as { meta, title, path }}
    <article class="post">
      <h3>
        <a href={$url("./:slug", { slug: path.split("/").pop() })}>{title}</a>
      </h3>
      <p>
        {meta.summary || meta.frontmatter.summary}
        <a href={$url("./:slug", { slug: path.split("/").pop() })}>Read more.</a>
      </p>
      <strong>{meta.author || meta.frontmatter.author}</strong>
    </article>
    {/each}
  </div>
</div>

<style>
  .posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 -16px;
  }
  article.post {
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    margin: 16px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    max-width: 460px;
  }
  article.post > strong {
    margin-top: auto;
  }
</style>
