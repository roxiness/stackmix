module.exports = {
  preprocess: require("svelte-windicss-preprocess").preprocess({
    // uncomment this, if you need a config file
    // config: 'tailwind.config.js',
    compile: false,
    prefix: "windi-",
    globalPreflight: true,
    globalUtility: true,
  }),
};
