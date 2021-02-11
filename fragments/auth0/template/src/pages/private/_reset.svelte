<!-- routify:options apreload="proximity" -->
<script>
  import { onMount } from "svelte";
  import { isActive, url, ready } from "@roxi/routify";
  import auth0 from "../../auth0/service";
  import { isAuthenticated, user, token } from "../../auth0/store";

  let private_pages = [
    ["/private", "PRIVATE HOME", "/private/index"],
    ["/private/reports", "REPORTS", "/private/reports"],
  ];

  $: pages = private_pages;

  onMount(async () => {
    let auth0Client = await auth0.createClient();
    if (!(await auth0Client.isAuthenticated())) {
      await auth0.loginWithRedirect(auth0Client);
    }
    isAuthenticated.set(await auth0Client.isAuthenticated());
    if ($isAuthenticated) {
      user.set(await auth0Client.getUser());
      token.set(await auth0Client.getTokenSilently());
    }

    $ready();
  });
</script>

{#if $isAuthenticated}
  <header>
    <a href="/">APP TITLE </a>

    <button
      on:click={() => {
        $isAuthenticated ? auth0.logout() : auth0.login();
      }}
    >
      {#if $isAuthenticated}
        Logout as {$user.name}
      {:else}
        Login
      {/if}
    </button>
  </header>
  <main>
    <aside>
      {#each pages as [path, title, name]}
        <p>
          <a href={$url(path)} class:active={$isActive(name)}>{title}</a>&nbsp;
        </p>
      {/each}
    </aside>

    <section>
      <slot />
    </section>
  </main>
{:else}
  Authenticating ...
{/if}

<style>
  .active {
    font-weight: 700;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  aside {
    width: 30ch;
    border-right: 1px solid darkgray;
    margin-right: 5ch;
  }

  main {
    display: flex;
  }
</style>
