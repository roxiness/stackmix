/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro } = require('../pageMacro')
const opts = { timeout: 500 }


test('can navigate', pageMacro, async (t, page) => {
    await page.goto('http://dev.local:5000/')
    t.assert(await page.waitForSelector('nav', opts))
    
    await page.click('"posts"', opts)
    t.assert(await page.waitForSelector('"something about html"', opts))
})
