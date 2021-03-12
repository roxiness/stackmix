/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const { existsSync, readFileSync } = require('fs')
const test = require('ava')
const { resolve, pkgJson } = require('../lib')
const { distDir } = pkgJson.appConfig


test('index.html was prerenderd', async (t, page) => {
    const indexHtml = resolve(distDir, 'index.html')
    t.assert(existsSync(indexHtml), 'index.html should exist')

    const content = readFileSync(indexHtml, 'utf-8')
    t.regex(content, /<main>/, 'index.html\'s body should have prerendered content')
})