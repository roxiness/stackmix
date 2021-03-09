# Routify Templates [alpha]

Welcome to the Routify Templates repo! This project is still in development and should be considered experimental.

If you're okay with the experimental status, please take it for a whirl and report any issues you may encounter.

## Getting started [for contributors and testers]

```bash
$ git clone https://github.com/roxiness/routify-templates.git
$ cd routify-templates
$ npm install
```

#### To build a template from fragments

`npm run generate`

**The wizard can be skipped by providing fragments as arguments**
`npm run generate -- -fragments rollup,i18n,navigation,content,miligram,mdsvex`

**use `--watch` to update output on fragment change**

---

**Given the variety of fragments, we would greatly appreciate contributors for this projects** 🙏

## Available fragments (in alphabetical order)

<details>
<summary>auth</summary>
 Simple authentication template. You can set up a guard in `_layout` or `_reset` with `$user` from the provided authentication store. Implement your own authentication with just a few calls to the database or an API.
</details>

<details>
<summary>autoPreprocess</summary>
Adds svelte-preprocess
</details>

<details>
<summary>base</summary>
This is the actual scaffold of a Routify application. It sets you up for development with some testing included. You get some default layouts, 404 and a few basic routes to start with. 
</details>

<details>
<summary>content</summary>
Brings some content to life and show how to use parameters with Routify.
</details>

<details>
<summary>docker-nginx</summary>
Allows for running your app with Docker 
</details>

<details>
<summary>docker-ssr</summary>
Allows for running your SSR built app with Docker 
</details>

<details>
<summary>i18n</summary>
Sets up a basic translation store 
</details>

<details>
<summary>markdown</summary>
Includes __mdsvex__ and other the dependencies for markdown rendering
</details>

<details>
<summary>milligram</summary>
Milligram is a lightweight CSS framework
</details>

<details>
<summary>mobile</summary>
Adds CSS for mobile devices, depends on __milligram__
</details>

<details>
<summary>navigation</summary>
Adds navigation drawer and generates a menu from project pages
</details>

<details>
<summary>nollup</summary>
Nollup is Rollup compatible bundler for development, allowing for quick HMR.
</details>

<details>
<summary>postcss</summary>
Adds PostCSS to config, to be used in your code or CSS framworks like TailwindCSS 
</details>

<details>
<summary>pwa</summary>
This fragments adds a Service Worker to your app for instant conversion to PWA. Includes Workbox, manifest.json & logos
</details>

<details>
<summary>rollup</summary>
Rollup is a default bundler for Svelte apps and is the most stable option.
</details>

<details>
<summary>single-page</summary>
Facilitates Navigational scrolling - not to be confused with single page application
</details>

<details>
<summary>snowpack</summary>
Snowpack is alternative bundler, quicker than rollup
</details>

<details>
<summary>static</summary>
Adds Spank, the Static Site Generator (SSG, to export HTML pages from your SPA
</details>

<details>
<summary>svite</summary>
Svite adds support for ViteJS, the extremely quick developer server which skips bundling and uses modules instead. 
</details>

<details>
<summary>tailwindcss</summary>
TailwindCSS is extremely popular utility CSS framework. This fragment depends on **postcss** fragment.
</details>

<details>
<summary>vercel</summary>
Prepares you app for easy deploy with Vercel
</details>
<details>

<summary>windicss</summary>
WindiCSS is alternative compiler for TailwindCSS config. Quicker than native TailwindCSS via PostCSS, still in early development stages.
</details>
