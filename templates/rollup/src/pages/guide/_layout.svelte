<script>
  import { url, isActive, components } from '@roxi/routify'
  $: getClass = (path) => ($isActive(path) ? 'active' : '')

  /**
   * normally we'd use a simple `$layout.children`, but since some templates inline
   * the guide component, using ´$layout` isn't reliable.
   */
  const fragments = $components.find((c) => c.path === '/guide').children
</script>

<div class="container">
  <h1>Guide</h1>

  <nav class="fragments">
    <h4>Fragments</h4>
    {#each fragments as { path, title }}
      <a href={$url(path)} class={getClass(path)}> {title}</a>
    {/each}
  </nav>
  <div class="fragment">
    <slot />
  </div>
</div>

<!-- routify:options index=50 -->
<style>
  .container {
    padding-top: 32px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'header header'
      'nav main';
  }
  h1 {
    grid-area: header;
  }
  .fragments {
    grid-area: nav;
    border-right: 1px solid #ccc;
    padding-right: 16px;
    margin-right: 32px;
  }
  .fragment {
    grid-area: main;
  }
  nav a {
    display: block;
  }
  .active {
    font-weight: bold;
  }
</style>
