/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro } = require('../lib')

test('can see frontpage', pageMacro, async (t, page) => {
    await page.goto('http://localhost:5000/posts')
    t.assert(await page.waitForSelector('"something about html"'))
})
