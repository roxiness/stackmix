<script>
  import Login from "../components/Auth/Login.svelte";
  import { user } from "../components/Auth/store.js";
  import { goto } from "@roxi/routify";
  $: if ($user) $goto("/");
</script>

<!-- routify:options index=false -->
<Login />
