<script>
  import { layout, components, url } from "@roxi/routify";
  $: postsFolder = $components.find(({ meta }) => meta.name === "postEntries");
  $: posts = postsFolder.children.filter((post) => !post.meta.supersecret);
  $: console.log(posts);
</script>

<!-- routify:options index=200 -->
<h1>Posts</h1>
<div class="posts">
  {#each posts as { meta, title, path }}
    <article class="post">
      <h3>
        <a href={$url("./:slug", { slug: path.split("/").pop() })}>{title}</a>
      </h3>
      <p>{meta.summary || meta.frontmatter.summary}
        <a href={$url("./:slug", { slug: path.split("/").pop() })}>Read more.</a>        
      </p>      
        <strong>{meta.author || meta.frontmatter.author}</strong>      
    </article>
  {/each}
</div>

<style>
  .posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  article.post {
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    margin: 16px 24px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 360px;
  }
  article.post>strong {
    margin-top: auto
  }
</style>
