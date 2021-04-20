<script>
    import { user, authenticating } from "./store";
    import { url } from "@roxi/routify";
</script>

<ul>
    <li>
        {#if $authenticating}
            authenticating...
        {:else if $user}
            <a href={$url("/user")}>{$user.username}</a>
        {:else}
            <a href={$url("/login")}>Login</a>
        {/if}
    </li>
    <li>
        <a href={$url("/protected")}>Go to protected pages</a>
    </li>
</ul>

<style>
    ul.nested {
        /* display: none; */
        position: absolute;
    }
    ul.root:hover ul.nested {
        display: block;
    }
    li {
        margin: 1rem;
        list-style: none;
    }
</style>
