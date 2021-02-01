<script>
  import { afterPageLoad } from "@roxi/routify";
  let overlayElem;
  let elHandle;
  let width;

  $afterPageLoad(updateOverlay);
  $: width && updateOverlay()

  function updateOverlay() {
    const { x, y, width, height } = elHandle.getElementsByClassName("is-active")[0].getBoundingClientRect();
    overlayElem.style.top = `${y}px`;
    overlayElem.style.left = `${x}px`;
    overlayElem.style.width = `${width}px`;
    overlayElem.style.height = `${height}px`;
  }
</script>

<div bind:this={elHandle} bind:clientWidth={width}>
  <slot />
</div>

<div class="overlay" bind:this={overlayElem} />

<style>
  .overlay {
    transition: all 0.3s;
    position: fixed;
    border-bottom: 3px solid #a1fac3;
  }
</style>
