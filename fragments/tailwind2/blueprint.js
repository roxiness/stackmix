module.exports = {
  configs: ({ getConfigString, stringify }) => ({
    packagejson: require("./template/package.json"),
    svelte: {
      css: `(css) => css.write("bundle.css"),`,
      preprocess: [
        `
        autoPreprocess({
          postcss: true,
          defaults: {
            style: "postcss",
          },
        }),`,
      ],
    },

    rollup: {
      plugins: [
        // resolve matching modules from current working directory
        `postcss({
          plugins: [postcssImport()],
        }),`,
      ],
    },
  }),
};
