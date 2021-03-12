<script>
  import { ready, components } from "@roxi/routify";

  /**
   * $components returns all pages and layouts indexed by Routify. We want
   * all layouts and pages nested in the /frontpage folder
   */
  const nodes = $components.find((n) => n.path === "/frontpage").children;

  /**
   * Normally Routify emits an `app-loaded` event, when the page component has
   * been loaded. Since we're loading additional pages as inlined components, we
   * want to delay this event by calling `$ready` after the components have
   * loaded. Whenever `$ready` is used in a component, Routify will delay the
   * `app-loaded` event till `$ready()` has been called.
   */
  const preloadPromises = nodes.map((node) => node.preload());
  Promise.all(preloadPromises).then($ready);
</script>

<div class="pages">
  <!-- iterate through each layout & page component nested in `/frontpage` -->
  {#each nodes as node, index}
    <!-- in case the component is a layout, we also want its nested index.
      For this we use `componentsWithIndex`. This will return [layout, page]
      if our component is a layout and [page] if its a page. -->
    {#await node.componentWithIndex then [Cmp, IndexCmp]}
      <!-- let's add a subtle background to every other page -->
      <div class="page" class:uneven={index % 2} id={node.title}>
        <div class="container">
          <!-- render the component -->
          <svelte:component this={Cmp}>
            <!-- if the component is a layout, we will also render its index -->
            <svelte:component this={IndexCmp} />
          </svelte:component>
        </div>
      </div>
    {/await}
  {/each}
</div>

<style>
  .page {
    height: 100vh;
    padding-top: 50px;
    box-sizing: border-box;
  }
  .uneven {
    background: #eee;
  }
</style>
