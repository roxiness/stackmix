<script>
  import { url, isActive, layout } from "@roxi/routify";
  $: getClass = (path) => ($isActive(path) ? "active" : "");
</script>

<ul>
  {#each $layout.children as { path, title }}
    <li>
      <a href={$url(path)} class={getClass(path)}> {title}</a>
    </li>
  {/each}
</ul>
