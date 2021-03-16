<script>
  import { logout, user, authenticating } from "../components/Auth/store.js";
  import { goto } from "@roxi/routify";

  /**
   * if there's no logged in user and we're not waiting for authentication,
   * redirect the user
   */
  $: if (!$user && !$authenticating) $goto("/");
</script>

{#if $authenticating}
  authenticating...
{:else if $user}
  <h3>
    Hello {$user.username}
  </h3>
  <button on:click={logout}>Logout</button>
{/if}

<!-- routify:options index=false -->
