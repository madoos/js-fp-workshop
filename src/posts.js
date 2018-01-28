'use strict'

const getTsFor = (date) => (new Date(date)).getTime()

module.exports = [{
  'id': 2,
  'title': 'ES6 Promises',
  'author': 'Kurt',
  'selfurl': '/posts/2',
  'published': getTsFor('2017-05-02'),
  'tags': [
    'es6',
    'promises'
  ],
  'displayDate': '2017-05-02'
},
{
  'id': 1,
  'title': 'Currying Things',
  'author': 'Dave',
  'selfurl': '/posts/1',
  'published': getTsFor('2017-05-01'),
  'tags': [
    'functional programming'
  ],
  'displayDate': '2017-05-01'
},
{
  'id': 3,
  'title': 'Monads, Futures, Promises',
  'author': 'Beth',
  'selfurl': '/posts/3',
  'published': getTsFor('2017-05-03'),
  'tags': [
    'promises',
    'futures'
  ],
  'displayDate': '2017-05-03'
},
{
  'id': 4,
  'title': 'Basic Destructuring in ES6',
  'author': 'Angie',
  'selfurl': '/posts/4',
  'published': getTsFor('2017-06-01'),
  'tags': [
    'es6',
    'destructuring'
  ],
  'displayDate': '2017-06-01'
},
{
  'id': 5,
  'title': 'Composing Functions',
  'author': 'Tom',
  'selfurl': '/posts/5',
  'published': getTsFor('2017-07-01'),
  'tags': [
    'functional programming'
  ],
  'displayDate': '2017-07-01'
},
{
  'id': 6,
  'title': 'Lazy Sequences in FP',
  'author': 'Dave',
  'selfurl': '/posts/6',
  'published': getTsFor('2017-08-01'),
  'tags': [
    'functional programming'
  ],
  'displayDate': '2017-08-01'
},
{
  'id': 7,
  'title': 'Common Promise Idioms',
  'author': 'Kurt',
  'selfurl': '/posts/7',
  'published': getTsFor('2017-09-01'),
  'tags': [
    'es6',
    'promises'
  ],
  'displayDate': '2017-09-01'
},
{
  'id': 8,
  'title': 'Stop using Deferred',
  'author': 'Dave',
  'selfurl': '/posts/8',
  'published': getTsFor('2017-10-01'),
  'tags': [
    'promises',
    'futures'
  ],
  'displayDate': '2017-10-01'
},
{
  'id': 9,
  'title': 'Default Function Parameters in ES6',
  'author': 'Angie',
  'selfurl': '/posts/9',
  'published': getTsFor('2018-01-20'),
  'tags': [
    'es6',
    'destructuring'
  ],
  'displayDate': '2018-01-20'
},
{
  'id': 10,
  'title': 'Use more Parenthesis!',
  'author': 'Tom',
  'selfurl': '/posts/10',
  'published': getTsFor('2018-01-27'),
  'tags': [
    'functional programming'
  ],
  'displayDate': '2018-01-27'
}]
