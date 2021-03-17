const { assetsDir } = require('./package.json').appConfig

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    [assetsDir]: { url: '/', static: true },
    src: { url: '/build' },
    '.routify': { url: '/.routify' }
  },
  "routes": [
    { "match": "routes", "src": ".*", "dest": "/__app.html" },
  ],
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv'],
  packageOptions: {
    knownEntrypoints: [
      /* ... */
    ],
    /* ... */
  },
  devOptions: {
    open: 'none',
    port: 5000
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
