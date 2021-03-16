<script>
  import { login, authenticating, user } from "./store.js";
  let username = "user@example.com";
  let password = "pass";

  const handleSubmit = () => login(username, password);
</script>

<div class="container">
  <h3>Login</h3>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={username} />
    <input type="password" bind:value={password} />
    {#if !$authenticating && !$user}
      <input type="submit" />
    {:else}
      authenticating...
    {/if}
  </form>
</div>
