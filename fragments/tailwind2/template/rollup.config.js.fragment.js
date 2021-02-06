exports.patch = ({ placeholders, configs, stringify }) => {
  placeholders.imports.push(`import autoPreprocess from "svelte-preprocess";`);
  placeholders.imports.push(`import postcssImport from "postcss-import";`);
  placeholders.imports.push(`import postcss from "rollup-plugin-postcss";`);
  placeholders.constants.push(`process.env.NODE_ENV = production ? "production" : "development";`);
};
