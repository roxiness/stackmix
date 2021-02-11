<script>
  import { onMount } from "svelte";
  import { goto, ready } from "@roxi/routify/runtime/helpers";
  import auth0 from "../../auth0/service";

  onMount(async () => {
    let auth0Client = await auth0.createClient();
    const urlParams = new URLSearchParams(window.location.search);
    const isCallback = urlParams.get("code") > "";

    if (isCallback) {
      await auth0.handleRedirect(auth0Client);
    } else {
      if (!(await auth0Client.isAuthenticated())) {
        await auth0.loginWithRedirect(auth0Client);
      }
    }

    $ready();
    $goto("/private");
  });
</script>

<p>Redirecting you to private part of the Application</p>
