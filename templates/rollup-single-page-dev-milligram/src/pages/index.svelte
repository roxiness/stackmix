<script>
  import { layout, ready, components } from '@roxi/routify'

  // we want the nodes nested in the `/frontpage` folder
  const nodes = $components.find((n) => n.path === '/frontpage').children

  // we delay the ready state of our app
  // till all our inlined components have been loaded
  const preloadPromises = nodes.map((node) => node.preload())
  Promise.all(preloadPromises).then($ready)
</script>

<div class="pages">
  {#each nodes as node, index}
    <!-- componentWithIndex also returns an `index.svelte` file if one exists -->
    {#await node.componentWithIndex then [Cmp, Index]}
      <div class="page" class:uneven={index % 2} id={node.title}>
        <div class="container">
          <!-- layout or page -->
          <svelte:component this={Cmp}>
            <!-- index if Cmp is layout. Can be removed if not needed. -->
            <svelte:component this={Index} />
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
