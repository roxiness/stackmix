/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro } = require('../lib')

test('default page shows English content', pageMacro, async (t, page) => {
    await page.goto('http://localhost:5000/guide/i18n')
    t.assert(await page.waitForSelector('"Internationalization"'))
})

test('German page shows German content', pageMacro, async (t, page) => {
    await page.goto('http://localhost:5000/de/guide/i18n')
    t.assert(await page.waitForSelector('"Internationalisierung"'))
})

test('French page shows French content', pageMacro, async (t, page) => {
    await page.goto('http://localhost:5000/fr/guide/i18n')
    t.assert(await page.waitForSelector('"Internationalisation"'))
})
