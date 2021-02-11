import createAuth0Client from "@auth0/auth0-spa-js";
import { user, isAuthenticated, token, popupOpen } from "./store";
import config from "../../auth.config";

async function createClient() {
  let auth0Client = await createAuth0Client(config);
  return auth0Client;
}

async function handleRedirect(client) {
  await client.handleRedirectCallback();

  user.set(await client.getUser());
  isAuthenticated.set(true);
  token.set(await client.getTokenSilently());

  return true;
}

async function loginWithPopup(client, options) {
  popupOpen.set(true);
  try {
    await client.loginWithPopup(options);
    user.set(await client.getUser());
    isAuthenticated.set(true);
    token.set(await client.getTokenSilently());
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    isAuthenticated.set(false);
  } finally {
    popupOpen.set(false);
  }
}

async function loginWithRedirect(client, options) {
  popupOpen.set(true);
  try {
    await client.loginWithRedirect(options);
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    isAuthenticated.set(false);
  } finally {
    popupOpen.set(false);
  }
}

async function logout() {
  let auth0client = await createClient();
  isAuthenticated.set(false);
  await auth0client.logout();
}

async function login() {
  let auth0Client = await createClient();
  await loginWithRedirect(auth0Client);
}

const auth0 = {
  createClient,
  loginWithPopup,
  loginWithRedirect,
  login,
  logout,
  handleRedirect,
};

export default auth0;
