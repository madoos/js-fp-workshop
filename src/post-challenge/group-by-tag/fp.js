'use strict'

const {
  map,
  cartesian,
  group,
  get,
  tap,
  pipe,
  curry,
  flatten,
  mapObject
} = require('../../core')

const debug = curry((tag, arg) => {
  console.log(tag, arg)
})

const cartesianProductByTags = (post) => cartesian(get('tags', post), [post])
const byTag = get(0)
const onlyPosts = map(get(1))

const groupByTags = pipe(
  map(cartesianProductByTags),
  flatten,
  group(byTag),
  mapObject(onlyPosts)
)

module.exports = groupByTags
