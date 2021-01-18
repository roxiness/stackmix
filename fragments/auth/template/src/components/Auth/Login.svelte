<script>
  import { ready } from "@roxi/routify";
  import { login } from "./store.js";
  let username = "user@example.com";
  let password = "pass";

  const handleSubmit = () => login(username, password);

  /**
   * We need to call $ready() if we're protectecing an SSR page.
   * Otherwise, tossr will wait indefinitely for the blocked page to load.
   * */
  $ready();
</script>

<h3>Login</h3>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={username} />
  <input type="password" bind:value={password} />
  <input type="submit" />
</form>
