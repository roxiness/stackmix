#!/usr/bin/env node

const { program } = require('commander')
const { merge } = require('canvasit')
const prompts = require('prompts')
const { resolve } = require('path')
const { promptFragments } = require('./prompts')

const commaSeparatedList = v => v.split(/[ ,]/)

program
  .arguments('[name]')
  .option('-f, --fragments <fragments>', 'comma separated list of fragments to be used', commaSeparatedList)
  .action(async (name, options, command) => {
    let { fragments } = options

    fragments = fragments || await promptFragments()

    name = name
      || (await prompts({
        type: 'text',
        message: 'type the folder where you would like to install',
        name: 'name',
        initial: ['routify', ...fragments, 'app'].join('-')
      })).name

    await merge(
      fragments,
      resolve(process.cwd(), name),
      {
        basepath: resolve(__dirname, '..', 'fragments'),
        ignore: [
          "node_modules",
          "dist",
          ".routify"
        ],
        include: [
          "base"
        ],
      }
      )
  })
  .parse()
