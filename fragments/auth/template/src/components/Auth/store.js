import { writable } from 'svelte/store'
export const user = writable(null)
export const authenticating = writable(true)
export const logout = () => {
    localStorage.removeItem('user')
    authenticate()
}

export const login = (username, password) => {
    authenticating.set(true)
    if (username === 'user@example.com' && password === 'pass') {
        const user = { username, token: 'abcdefg' }
        storeCredentials(user)
        // we're delaying authentication to simulate realworld timings
        setTimeout(authenticate, 500)
    } else {
        authenticating.set(false)
        console.error('wrong username or password')
    }
}

// we're delaying authentication to simulate realworld timings
setTimeout(authenticate, 500)

function authenticate() {
    /**
     * Insecure example!
     * In production, a token should be stored in localStorage/cookie
     * and sent to an auth server for verification.
     * */
    user.set(getCredentials())

    // we need to inform other components that we're no longer authenticating
    authenticating.set(false)
}

function getCredentials() {
    const cred = localStorage.getItem('user')
    return cred && JSON.parse(cred)
}

function storeCredentials(user) {
    localStorage.setItem('user', JSON.stringify(user))
}
