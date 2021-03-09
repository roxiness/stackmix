/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/build' },
    '.routify': { url: '/.routify' },
  },
  routes: [{ match: 'routes', src: '.*', dest: '/__app.html' }],
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-dotenv'],
  packageOptions: {
    knownEntrypoints: [
      /* ... */
    ],
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
