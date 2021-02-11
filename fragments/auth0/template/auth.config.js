// Get those from Auth0 dashboard
const config = {
  domain: "alesvaupotic.eu.auth0.com",
  client_id: "zgATmH0FHkiVJugdSEpIMjYuc3ATKVFN",
  redirect_uri: window.location.origin + "/auth0/callback",
  cacheLocation: "localstorage",
  useRefreshTokens: true,
};

export default config;
