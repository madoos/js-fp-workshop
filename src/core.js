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

// group

const toString = Object.prototype.toString
const isFunction = (o) => toString.call(o) === '[object Function]'

const group = (prop, list) => {
  return list.reduce((grouped, item) => {
    var key = isFunction(prop) ? prop.apply(this, [item]) : item[prop]
    grouped[key] = grouped[key] || []
    grouped[key].push(item)
    return grouped
  }, {})
}

const map = (fn, list) => {
  return list.map(fn)
}

const isArray = Array.isArray

const flatten = (list) => {
  return list.reduce((items, item) => {
    return isArray(item) ? items.concat(item) : item
  }, [])
}

const flatMap = (fn, list) => {
  return flatten(map(fn, list))
}

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))))
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a)
const keys = Object.keys

const mapObject = (fn, obj) => {
  return keys(obj).reduce((res, key) => {
    res[key] = fn(obj[key], key)
    return res
  }, {})
}

module.exports = {
  curry,
  useWith: curry(useWith),
  filter: curry(filter),
  get: curry(get),
  gte: curry(gte),
  pipe,
  tap: curry(tap),
  group: curry(group),
  map: curry(map),
  flatMap: curry(flatMap),
  flatten,
  cartesian,
  mapObject: curry(mapObject)
}
