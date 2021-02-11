<!-- routify:options apreload="proximity" -->
<script>
  import { onMount } from "svelte";
  import { isActive, url } from "@roxi/routify";
  import auth0 from "../auth0/service";
  import { isAuthenticated, user, token } from "../auth0/store";

  let public_pages = [
    ["/", "HOME", "/index"], // path, title, route name
    ["/about", "ABOUT", "/about"],
  ];

  let private_pages = [["/private", "PRIVATE", "/private/index"]];

  let auth_pages = [...public_pages, ...private_pages];

  $: pages = $isAuthenticated ? auth_pages : public_pages;

  onMount(async () => {
    let auth0Client = await auth0.createClient();
    isAuthenticated.set(await auth0Client.isAuthenticated());
    if ($isAuthenticated) {
      user.set(await auth0Client.getUser());
      token.set(await auth0Client.getTokenSilently());
    }
  });
</script>

<header>
  <div>APP TITLE</div>

  <nav>
    {#each pages as [path, title, name]}
      <a href={$url(path)} class:active={$isActive(name)} style="padding: 0 10px">{title}</a>
    {/each}
  </nav>
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
  <section>
    <slot />
  </section>
</main>

<style>
  .active {
    font-weight: 700;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
