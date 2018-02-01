'use strict'

const keys = Object.keys
const isArray = Array.isArray
const toString = Object.prototype.toString
const isFunction = (o) => toString.call(o) === '[object Function]'
const curry = (fn) => (a, b) => (!b) ? (b) => fn(a, b) : fn(a, b)
const filter = (fn, list) => list.filter(fn)
const get = (key, obj) => obj[key]
const gte = (a, b) => a >= b
const lt = (a, b) => a < b
const pipe = (...fns) => (arg) => fns.reduce((result, fn) => fn(result), arg)
const map = (fn, list) => list.map(fn)
const sort = (fn, list) => [].concat(list).sort(fn)
const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))))
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a)

const group = (prop, list) => {
  return list.reduce((grouped, item) => {
    var key = isFunction(prop) ? prop.apply(this, [item]) : item[prop]
    grouped[key] = grouped[key] || []
    grouped[key].push(item)
    return grouped
  }, {})
}

const useWith = (transforms, fn) => {
  return (...args) => {
    const intersect = (targs) => targs.map((targ, i) => transforms[i](targ))
    const targs = args.slice(0, transforms.length)
    const remaining = args.slice(transforms.length)
    return fn(...intersect(targs), ...remaining)
  }
}

const flatten = (list) => {
  return list.reduce((items, item) => {
    return isArray(item) ? items.concat(item) : item
  }, [])
}

const mapObject = (fn, obj) => {
  return keys(obj).reduce((res, key) => {
    res[key] = fn(obj[key], key)
    return res
  }, {})
}

const comparator = (fn) => {
  return (a, b) => {
    return fn(a, b) ? -1
      : fn(b, a) ? 1
        : 0
  }
}

const tap = (fn, arg) => {
  fn(arg)
  return arg
}

function * naturals () {
  let i = 0
  while (true) {
    yield i++
  }
}

function * take (gen, n) {
  let i = 0
  for (let value of gen) {
    yield value
    if (++i === n) break
  }
}

function toArray (gen) {
  return [...gen]
}

function reduce (fn, initial) {
  return (arr) => arr.reduce(fn, initial)
}

// /////////////////////// streams ///////////////////////////////////////////

const { Readable, Transform } = require('stream')

function generatorInstanceToStream (gen) {
  return new Readable({
    objectMode: true,
    writableObjectMode: true,
    readableMode: true,
    read () {
      try {
        const iterator = gen.next()
        !iterator.done ? this.push(iterator.value) : this.push(null)
      } catch (e) {
        this.emit('error', e)
      }
    }
  })
}

function mapStream (fn) {
  return new Transform({
    objectMode: true,
    writableObjectMode: true,
    readableMode: true,
    transform: function (data, enc, done) {
      const res = fn(data, enc)

      return (res.then)
        ? res.then((_data) => done(null, _data)).catch(done)
        : done(null, res)
    }
  })
}

function _await (fn, time) {
  return function (...args) {
    return new Promise((resolve) => {
      const data = fn(...args)
      setTimeout(() => resolve(data), time)
    })
  }
}

function identity (data) {
  return data
}
module.exports = {
  sort: curry(sort),
  useWith: curry(useWith),
  filter: curry(filter),
  get: curry(get),
  gte: curry(gte),
  lt: curry(lt),
  tap: curry(tap),
  group: curry(group),
  map: curry(map),
  flatten,
  cartesian,
  mapObject: curry(mapObject),
  comparator,
  curry,
  pipe,
  naturals,
  take: curry(take),
  toArray,
  reduce,
  generatorInstanceToStream,
  mapStream,
  _await,
  identity
}
