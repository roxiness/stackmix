<a href="https://auth0.com/" alt="Auth0 web site"><h2>Auth0</h2></a>
<h3>Auth0 Dashboard - setting up your Application</h3>
<p>You'll need Domain and Client ID</p>
<p>Set the logo, Application URIs and your callback there to <b>/auth0/callback</b>. New Universal login is preferred.</p>

<h3>auth.config.js</h3>
<p>Set your variables which you get from your dashboard and are set per application:</p>
<pre>
domain: "YOUR.DOMAIN.auth0.com",
clientId: "YOUR-CLIENT-ID",
  </pre>
<p>Notice: by default Auth0 <b>loginWithRedirect</b> is used. You can swap it out for <b>loginWithPopup</b> if it fits your application better.</p>
