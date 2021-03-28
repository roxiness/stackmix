#!/usr/bin/env node

const { program } = require('commander')
const { merge } = require('canvasit')
const prompts = require('prompts')
const {  resolve } = require('path')

const commaSeparatedList = v => v.split(/[ ,]/)

program
  .arguments('[name]')
  .option('-f, --fragments <fragments>', 'comma separated list of fragments to be used', commaSeparatedList)
  .action(async (name, options, command) => {
    const { fragments } = options

    name = name
      || fragments && [...fragments.join('-'), 'app']
      || (await prompts({
        type: 'text',
        message: 'type the folder where you would like to install',
        name: 'name',
        initial: 'app'
      })).name

    merge(fragments, resolve(process.cwd(), name))
  })
  .parse()



