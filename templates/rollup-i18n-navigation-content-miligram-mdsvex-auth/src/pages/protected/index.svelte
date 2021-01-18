<h2>protected/index.svelte</h2>
<p>
  By checking for a user in

  <code>_layout.svelte</code>
  or
  <code>_reset.svelte</code> we can render a conditional login component instead
  of the actual page.
</p>
<p>This ensures that we're not bouncing the user from URL to URL.</p>
<p>
  If we need a dedicated login page, we can create a <code
    >pages/login.svelte</code
  >
  and use it to import our <code>Login</code> component
</p>
