<script>
  import { layout, isActive, url } from "@roxi/routify";
  import Overlay from "./Overlay.svelte";
</script>

<!-- <Overlay {links} /> -->
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
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    justify-content: space-evenly;
  }
  a {
    font-size: 14px;
    font-weight: 500;
    color: #aaa;
    text-transform: uppercase;
    text-decoration: none;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 10;
    transition: all 0.8s;
    line-height: 64px;
  }
</style>
