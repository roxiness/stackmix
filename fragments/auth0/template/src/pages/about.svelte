<script>
  import { metatags } from "@roxi/routify";
  import { isAuthenticated, user, token } from "../auth0/store";

  $: metatags.title = "ABOUT PAGE";
</script>

<div>
  <h1>ABOUT</h1>

  {#if $isAuthenticated}
    <h1>You're an authenticated user</h1>
    <p>
      {$user.name} = {$user.email}
    </p>
    <p>
      Token is <b>{$token}</b>
    </p>
  {:else}
    <h1>You're a guest.</h1>
  {/if}
</div>
