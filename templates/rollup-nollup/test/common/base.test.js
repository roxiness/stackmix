/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro, baseUrl } = require('../lib')

test('can see frontpage', pageMacro, async (t, page) => {
  await page.goto(baseUrl)
  t.assert(await page.waitForSelector('main'))
})
