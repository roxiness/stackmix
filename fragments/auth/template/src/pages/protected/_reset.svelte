<script>
  import Login, { authenticating, user, logout } from "../../components/Login.svelte";
  import { url } from "@roxi/routify";
</script>

<div class="protected">
  <a href={$url("/")}>Go back</a>
  <h1>
    Protected module {#if $user}<button on:click={logout}>logout</button>{/if}
  </h1>
  <main class="container">
    {#if $user}
      <slot />
    {:else if $authenticating}
      authenticating
    {:else}
      <Login />
    {/if}
  </main>
</div>

<style>
  .protected {
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
  }
  * :global(*) {
    color: white;
  }
  * :global(code) {
    color: initial
  }
</style>
