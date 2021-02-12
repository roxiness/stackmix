<script>
  import { afterPageLoad, route } from "@roxi/routify";
  let overlayElem, elHandle, width, height;

  // let's update the overlay position when there's a page change or the width changes
  $afterPageLoad(updateOverlayPosition);
  $: (width || height) && updateOverlayPosition();

  /**
   * updates position of overlay
   * @param node the node being navigated to
   */
  function updateOverlayPosition(node) {
    const activeElem = elHandle && elHandle.getElementsByClassName("is-active")[0];

    if (activeElem) {
      const wasVisible = overlayElem.style.display !== "none";
      // show the overlay
      overlayElem.style.display = null;
      const { x, y, width, height } = activeElem.getBoundingClientRect();
      const sameY = parseInt(y) === parseInt(overlayElem.style.top);
      // animate only if the overlay has same y position as target
      // & we're navigating to a node & the overlay was previously visible
      overlayElem.style.transition = sameY && node && wasVisible ? "all 0.3s" : null;
      overlayElem.style.top = `${y}px`;
      overlayElem.style.left = `${x}px`;
      overlayElem.style.width = `${width}px`;
      overlayElem.style.height = `${height}px`;
    } else if (overlayElem) {
      // hide the overlay if there's no active link
      overlayElem.style.display = "none";
    }
  }
</script>

<!-- wrap this overlay around its target -->
<div bind:this={elHandle}>
  <slot />
</div>

<!-- the overlay -->
<div class="overlay" bind:this={overlayElem} />

<!-- keep track of window resizing -->
<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
