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

### auth

Simple authentication template. You can set up a guard in `_layout` or `_reset` with `$user` from the provided authentication store. Implement your own authentication with just a few calls to the database or an API.

### autoPreprocess

Adds svelte-preprocess

### base

This is the actual scaffold of a Routify application. It sets you up for development with some testing included. You get some default layouts, 404 and a few basic routes to start with.

### content

Brings some content to life and show how to use parameters with Routify.

### docker-nginx

Allows for running your app with Docker

### docker-ssr

Allows for running your SSR built app with Docker

### i18n

Sets up a basic translation store

### markdown

Includes **mdsvex** and other the dependencies for markdown rendering

### milligram

Milligram is a lightweight CSS framework

### mobile

Adds CSS for mobile devices, depends on **milligram**

### navigation

Adds navigation drawer and generates a menu from project pages

### nollup

Nollup is Rollup compatible bundler for development, allowing for quick HMR.

### postcss

Adds PostCSS to config, to be used in your code or CSS framworks like TailwindCSS

### pwa

This fragments adds a Service Worker to your app for instant conversion to PWA. Includes Workbox, manifest.json & logos

### rollup

Rollup is a default bundler for Svelte apps and is the most stable option.

### single-page

Facilitates Navigational scrolling - not to be confused with single page application

### snowpack

Snowpack is alternative bundler, quicker than rollup

### static

Adds Spank, the Static Site Generator (SSG, to export HTML pages from your SPA

### svite

Svite adds support for ViteJS, the extremely quick developer server which skips bundling and uses modules instead.

### tailwindcss

TailwindCSS is extremely popular utility CSS framework. This fragment depends on **postcss** fragment.

### vercel

Prepares you app for easy deploy with Vercel

### windicss

WindiCSS is alternative compiler for TailwindCSS config. Quicker than native TailwindCSS via PostCSS, still in early development stages.
