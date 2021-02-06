const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};
