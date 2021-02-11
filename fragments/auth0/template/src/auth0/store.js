import { writable } from "svelte/store";

export const isAuthenticated = writable(false);
export const user = writable({});
export const token = writable({});
export const expires_in = writable(0);
export const popupOpen = writable(false);
export const error = writable();
