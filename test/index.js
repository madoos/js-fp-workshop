'use strict'

const Mocha = require('mocha')
const mocha = new Mocha({ timeout: 3000 })
const { join } = require('path')

const suite = [
  join(__dirname, './filter-30-days-ago.js'),
  join(__dirname, './group-by-tags.js')
]

suite
.forEach((test) => mocha.addFile(test))

mocha
.run()
.on('end', process.exit)
