<script>
  import { layout, isActive, url } from "@roxi/routify";
  import Overlay from "./Overlay.svelte";
</script>

<Overlay>
  <nav>
    {#each $layout.children as { path, title }}
      <a href={$url(path)} class:is-active={$isActive(path)} >{title}</a>
    {/each}
  </nav>
</Overlay>

<style>
  nav {
    text-transform: uppercase;
    background: white;
    display: flex;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    justify-content: space-evenly;
  }
  a {
    font-size: 14px;
    color: #aaa;
    text-transform: uppercase;
    flex-grow: 1;
    text-align: center;
    line-height: 64px;
  }
</style>
