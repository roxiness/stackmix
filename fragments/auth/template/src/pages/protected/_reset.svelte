<script>
  import Login from "../../components/Auth/Login.svelte";
  import { authenticating, user, logout } from "../../components/Auth/store.js";
  import { url, ready } from "@roxi/routify";

  /**
   * We don't want SSR for the content of protected pages. If we did,
   * `$ready()` should be called if the user failed to authenticate.
   * Otherwise Routify will wait indefinitely for `<slot />` to load.
   * */
  $: if (!$authenticating && !$user) $ready();
</script>

<div class="protected">
  <div class="wrapper">
    <nav>
      <a href={$url("/")}>Go back</a>
      {#if $user}<button on:click={logout}>logout</button>{/if}
    </nav>
    <h1>Protected module</h1>
    <main class="container">
      {#if $user}
        <slot />
      {:else if $authenticating}
        <h2>authenticating...</h2>
      {:else}
        <Login />
      {/if}
    </main>
  </div>
</div>

<style>
  .protected {
    position: absolute;
    height: calc(100% - 16px);
    width: calc(100% - 16px);
    background: black;
  }

  .wrapper {
    padding: 2rem;
  }

  * :global(*) {
    color: white;
  }
  * :global(code) {
    color: yellow;
    font-weight: bold;
  }

  nav {
    display: flex;
    justify-content: space-between;
    height: 2rem;
    align-items: center;
  }

  button {
    padding: 8px;
    color: black;
    border-radius: 6px;
    cursor: pointer;
  }
</style>
