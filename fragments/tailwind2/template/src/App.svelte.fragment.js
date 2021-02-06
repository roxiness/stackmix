exports.patch = ({ placeholders, configs, stringify }) => {
  const config = configs.routifyRuntime;
  placeholders.script.push(`import "./tailwind.css";`);
  placeholders.html.push(`<h1 class="bg-red-500 text-white w-full py-12">Tailwind red background, white text </h1>`);
};
