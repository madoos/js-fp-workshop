'use strict'

const {
  filter,
  gte,
  get,
  useWith,
  pipe,
  tap,
  curry
} = require('../core')

const debug = curry((tag, arg) => console.log(tag, arg))

// STEP BY STEP

const _30DaysAgo = (new Date()).getTime() - (86400000 * 30)

// SEQUENTIAL

const with30DaysAgo = gte(_30DaysAgo)
const postsWith30DaysAgo = useWith([get('published')], with30DaysAgo)
const filterWith30DaysAgo = filter(postsWith30DaysAgo)

// COMPOSITION

const filterWith30DaysAgo2 = pipe(
  tap(debug('Selection criteria')),
  gte,
  tap(debug('generate comparator')),
  useWith([get('published')]),
  tap(debug('generate comparator for objects with prop published')),
  filter,
  tap(debug('Transform predicate to filter to N(FUNCTOR)'))
)(_30DaysAgo)

module.exports = filterWith30DaysAgo
// module.exports = filterWith30DaysAgo2
