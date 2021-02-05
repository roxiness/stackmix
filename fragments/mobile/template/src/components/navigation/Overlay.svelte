<script>
  import { afterPageLoad, route } from "@roxi/routify";
  let overlayElem, elHandle, width, height;

  $afterPageLoad(updateOverlay);
  $: (width || height) && updateOverlay();

  function updateOverlay(target) {
    const { x, y, width, height } = elHandle.getElementsByClassName("is-active")[0].getBoundingClientRect();
    const movingOnY = parseInt(y) === parseInt(overlayElem.style.top);

    overlayElem.style.transition = movingOnY && target ? "all 0.3s" : "none";
    overlayElem.style.top = `${y}px`;
    overlayElem.style.left = `${x}px`;
    overlayElem.style.width = `${width}px`;
    overlayElem.style.height = `${height}px`;
  }
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div bind:this={elHandle}>
  <slot />
</div>

<div class="overlay" bind:this={overlayElem} />
