'use strict'

const {
  filter,
  gte,
  get,
  useWith,
  pipe,
  tap,
  curry
} = require('../../core')

const debug = curry((tag, arg) => console.log(tag, arg))

// STEP BY STEP

const _30DaysAgo = (new Date()).getTime() - (86400000 * 30)

// SEQUENTIAL

const with30DaysAgo = gte(_30DaysAgo)
const postsWith30DaysAgo = useWith([get('published')], with30DaysAgo)
const filterWith30DaysAgo = filter(postsWith30DaysAgo)

// COMPOSITION

const filterWith30DaysAgo2 = pipe(
  gte,
  useWith([get('published')]),
  filter
)(_30DaysAgo)

module.exports = filterWith30DaysAgo
// module.exports = filterWith30DaysAgo2
