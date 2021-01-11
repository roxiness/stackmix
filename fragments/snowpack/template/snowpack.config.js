/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    assets: { url: '/', static: true },
    src: { url: '/' },
    '.routify': { url: '/.routify' }
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
