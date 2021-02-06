const production = !process.env.ROLLUP_WATCH;

module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};