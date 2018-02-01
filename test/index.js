'use strict'

const Mocha = require('mocha')
const mocha = new Mocha({ timeout: 3000 })
const { join } = require('path')

const suite = [
  join(__dirname, './post-challenge/filter-30-days-ago.js'),
  join(__dirname, './post-challenge/group-by-tags.js'),
  join(__dirname, './post-challenge/sort-by-publication-date.js'),
  join(__dirname, './post-challenge/program.js'),
  join(__dirname, './numbers-challenge.js'),
  join(__dirname, './async-numbers-challenge.js')
]

suite
.forEach((test) => mocha.addFile(test))

mocha
.run()
.on('end', process.exit)
