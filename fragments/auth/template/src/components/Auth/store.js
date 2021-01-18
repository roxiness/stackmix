import { writable } from "svelte/store";
export const user = writable(null);
export const authenticating = writable(true);
export const logout = () => {
    localStorage.removeItem("user");
    authenticate();
};

export const login = (username, password) => {
    if (username === "user@example.com" && password === "pass") {
        const userObj = { username, token: "abcdefg" };
        localStorage.setItem("user", JSON.stringify(userObj));
        authenticate();
    }else
    console.error('wrong username or password')
}

// we're delaying authentication to simulate realworld env
setTimeout(authenticate, 500);

function authenticate() {
    /**
     * Insecure example!
     * In production, a token should be stored in localStorage/cookie
     * and sent to an auth server for verification.
     * */
    const cred = localStorage.getItem("user");
    user.set(cred ? JSON.parse(cred) : null);
    authenticating.set(false);
}