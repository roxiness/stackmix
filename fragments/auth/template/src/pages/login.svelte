<script>
    import Login from '../components/Auth/Login.svelte'
    import { user } from '../components/Auth/store.js'
    import { goto } from '@roxi/routify'
    // if user is already logged in, we don't want them on the login page
    $: if ($user) $goto('/')
</script>

<!-- routify:options index=false -->
<Login />
