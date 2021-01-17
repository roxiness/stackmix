<script context="module">
  import { writable } from 'svelte/store'
  export const user = writable(null)
  export const authenticating = writable(true)
  export const logout = () => {
    localStorage.removeItem('user')
    authenticate()
  }
  // we're delaying to simulate realworld authentication
  setTimeout(authenticate, 500)

  function authenticate() {
    /**
     * Insecure example!
     * In production, a token should be stored in localStorage/cookie
     * and sent to an auth server for verification.
     * */
    const cred = localStorage.getItem('user')
    user.set(cred ? JSON.parse(cred) : null)
    authenticating.set(false)
  }
</script>

<script>
  import { ready } from '@roxi/routify'
  let username = 'user'
  let password = 'pass'

  /**
   * We need to call $ready() if we're protectecing an SSR page.
   * Otherwise, tossr will wait indefinitely for the blocked page to load.
   * */
  $ready()

  function handleSubmit() {
    if (username === 'user' && password === 'pass') {
      const userObj = { username, token: 'abcdefg' }
      localStorage.setItem('user', JSON.stringify(userObj))
      authenticate()
    }
  }
</script>

<h3>Login</h3>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={username} />
  <input type="password" bind:value={password} />
  <input type="submit" />
</form>
