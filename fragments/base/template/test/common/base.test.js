/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro } = require('../pageMacro')

test('can see frontpage', pageMacro, async (t, page) => {
    await page.goto('http://localhost:5000/')
    t.assert(await page.waitForSelector('main'))
})

