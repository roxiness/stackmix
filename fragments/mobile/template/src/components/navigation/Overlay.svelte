<script>
  import { afterPageLoad, route } from "@roxi/routify";
  let overlayElem, elHandle, width, height;

  $afterPageLoad(updateOverlay);
  $: (width || height) && updateOverlay();

  function updateOverlay(node) {
    const activeElem = elHandle.getElementsByClassName("is-active")[0];
    const wasVisible = !overlayElem.style.display === "none";

    overlayElem.style.display = "none";

    if (activeElem) {
      overlayElem.style.display = null;
      const { x, y, width, height } = activeElem.getBoundingClientRect();
      const movingOnY = parseInt(y) === parseInt(overlayElem.style.top);

      overlayElem.style.transition = movingOnY && node && wasVisible ? "all 0.3s" : "none";
      overlayElem.style.top = `${y}px`;
      overlayElem.style.left = `${x}px`;
      overlayElem.style.width = `${width}px`;
      overlayElem.style.height = `${height}px`;
    }
  }
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div bind:this={elHandle}>
  <slot />
</div>

<div class="overlay" bind:this={overlayElem} />
