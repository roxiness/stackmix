/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro } = require('../pageMacro')


test('can navigate', pageMacro, async (t, page) => {
    await page.goto('http://dev.local:5000/')
    t.assert(await page.waitForSelector('nav'))
    
    await page.click('"posts"')
    t.assert(await page.waitForSelector('"something about html"'))
})
