'use strict'

const curry = (fn) =>
                (a, b) => (!b)
                  ? (b) => fn(a, b)
                  : fn(a, b)

const useWith = (transforms, fn) => {
  return (...args) => {
    const intersect = (targs) => targs.map((targ, i) => transforms[i](targ))
    const targs = args.slice(0, transforms.length)
    const remaining = args.slice(transforms.length)
    return fn(...intersect(targs), ...remaining)
  }
}

const filter = (fn, list) => {
  return list.filter(fn)
}

const get = (key, obj) => {
  return obj[key]
}

// Predicate
const gte = (a, b) => {
  return a >= b
}

// combinator

const tap = (fn, arg) => {
  fn(arg)
  return arg
}

const pipe = (...fns) => (arg) => fns.reduce((result, fn) => fn(result), arg)

module.exports = {
  curry,
  useWith: curry(useWith),
  filter: curry(filter),
  get: curry(get),
  gte: curry(gte),
  pipe,
  tap: curry(tap)
}
