/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro } = require('../pageMacro')
const opts = { timeout: 500 }


test('can see frontpage', pageMacro, async (t, page) => {
    await page.goto('http://dev.local:5000/posts/markdown')
    // await new Promise(resolve => setTimeout(resolve, 100))
    t.assert(await page.waitForSelector('#markdown-md', opts))
})