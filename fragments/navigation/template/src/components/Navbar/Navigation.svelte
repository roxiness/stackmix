<!--
   Navigation component 
   Props:
     children=${layout.children} (optional) array of nodes
     maxDepth=Infinite (optional) depth of descendent tree
     explode="all"|"selected"|false (optional) explode descendents
   Example1:
     <Navigation />
   Example2:
     <Navigation maxDepth=2 children={$layout.children} />
-->
<script>
  import { url, isActive, layout } from "@roxi/routify";
  export let items = $layout.children;
  export let maxDepth = Infinity;
  export let _depth = 0;
  export let explode = "selected"; // "selected", "all" or false
  _depth++;
  $: getClass = (path) => ($isActive(path) ? "active" : "");
  $: shouldExplode = (path) => (explode === "selected" && $isActive(path)) || explode === "all";
</script>

<ul>
  {#each items as { path, title, children, ...rest }}
    <li data-nav-depth={_depth}>
      <!-- we use $url to resolve the path  -->
      <a href={$url(path)} class={getClass(path)}> {title}</a>

      <!-- parse nested children here -->
      {#if items && _depth < maxDepth && shouldExplode(path)}
        <svelte:self items={children} {maxDepth} {_depth} />
      {/if}
    </li>
  {/each}
</ul>

<style>
  .active {
    font-weight: bold;
  }
  ul {
    padding-left: 12px;
  }
  li {
    list-style: none;
  }
</style>
