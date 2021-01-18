<script>
  import { logout, user } from "../components/Auth/store.js";
  import { goto } from "@roxi/routify";
  $: if (!$user) $goto("/");
</script>

<button on:click={logout}>Logout</button>
<!-- routify:options index=false -->
