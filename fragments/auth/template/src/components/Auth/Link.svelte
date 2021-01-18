<script>
  import { user } from "./store";
  import { url } from "@roxi/routify";
</script>

<ul>
  <li>
    {#if $user}
      <a href={$url("/user")}>{$user.username}</a>
    {:else}
      <a href={$url("/login")}>Login</a>
    {/if}
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
    margin-left: 6px;
    list-style: none;
  }
</style>
