<script>
    import Login from '../../components/Auth/Login.svelte'
    import {
        authenticating,
        user,
        logout,
    } from '../../components/Auth/store.js'
    import { url, ready } from '@roxi/routify'

    /**
     * We don't want SSR for the content of protected pages. If we did,
     * `$ready()` should be called if the user failed to authenticate.
     * Otherwise Routify will wait indefinitely for `<slot />` to load.
     * */
    $: if (!$authenticating && !$user) $ready()
</script>

<div class="protected">
    <a href={$url('/')}>Go back</a>
    <h1>
        Protected module {#if $user}<button on:click={logout}>logout</button
            >{/if}
    </h1>
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
        color: initial;
    }
    button {
        position: absolute;
        right: 16px;
        top: 16px;
    }
</style>
