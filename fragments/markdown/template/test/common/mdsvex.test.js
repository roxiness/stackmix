/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro } = require('../lib')

test('can view a markdown page', pageMacro, async (t, page) => {
    await page.goto('http://localhost:5000/guide/markdown')
    // await new Promise(resolve => setTimeout(resolve, 100))
    t.assert(await page.waitForSelector('"Markdown"'))
})
