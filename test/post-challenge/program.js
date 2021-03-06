'use strict'

const { expect } = require('chai')
const posts = require('../../src/post-challenge/posts')
const program = require('../../src/post-challenge')

const expectedResult = {
  "es6": [{
      "id": 2,
      "title": "ES6 Promises",
      "author": "Kurt",
      "selfurl": "/posts/2",
      "published": 1493683200000,
      "tags": [
        "es6",
        "promises"
      ],
      "displayDate": "2017-05-02"
    },
    {
      "id": 4,
      "title": "Basic Destructuring in ES6",
      "author": "Angie",
      "selfurl": "/posts/4",
      "published": 1496275200000,
      "tags": [
        "es6",
        "destructuring"
      ],
      "displayDate": "2017-06-01"
    },
    {
      "id": 7,
      "title": "Common Promise Idioms",
      "author": "Kurt",
      "selfurl": "/posts/7",
      "published": 1504224000000,
      "tags": [
        "es6",
        "promises"
      ],
      "displayDate": "2017-09-01"
    }
  ],
  "promises": [{
      "id": 2,
      "title": "ES6 Promises",
      "author": "Kurt",
      "selfurl": "/posts/2",
      "published": 1493683200000,
      "tags": [
        "es6",
        "promises"
      ],
      "displayDate": "2017-05-02"
    },
    {
      "id": 3,
      "title": "Monads, Futures, Promises",
      "author": "Beth",
      "selfurl": "/posts/3",
      "published": 1493769600000,
      "tags": [
        "promises",
        "futures"
      ],
      "displayDate": "2017-05-03"
    },
    {
      "id": 7,
      "title": "Common Promise Idioms",
      "author": "Kurt",
      "selfurl": "/posts/7",
      "published": 1504224000000,
      "tags": [
        "es6",
        "promises"
      ],
      "displayDate": "2017-09-01"
    },
    {
      "id": 8,
      "title": "Stop using Deferred",
      "author": "Dave",
      "selfurl": "/posts/8",
      "published": 1506816000000,
      "tags": [
        "promises",
        "futures"
      ],
      "displayDate": "2017-10-01"
    }
  ],
  "functional programming": [{
      "id": 1,
      "title": "Currying Things",
      "author": "Dave",
      "selfurl": "/posts/1",
      "published": 1493596800000,
      "tags": [
        "functional programming"
      ],
      "displayDate": "2017-05-01"
    },
    {
      "id": 5,
      "title": "Composing Functions",
      "author": "Tom",
      "selfurl": "/posts/5",
      "published": 1498867200000,
      "tags": [
        "functional programming"
      ],
      "displayDate": "2017-07-01"
    },
    {
      "id": 6,
      "title": "Lazy Sequences in FP",
      "author": "Dave",
      "selfurl": "/posts/6",
      "published": 1501545600000,
      "tags": [
        "functional programming"
      ],
      "displayDate": "2017-08-01"
    }
  ],
  "futures": [{
      "id": 3,
      "title": "Monads, Futures, Promises",
      "author": "Beth",
      "selfurl": "/posts/3",
      "published": 1493769600000,
      "tags": [
        "promises",
        "futures"
      ],
      "displayDate": "2017-05-03"
    },
    {
      "id": 8,
      "title": "Stop using Deferred",
      "author": "Dave",
      "selfurl": "/posts/8",
      "published": 1506816000000,
      "tags": [
        "promises",
        "futures"
      ],
      "displayDate": "2017-10-01"
    }
  ],
  "destructuring": [{
    "id": 4,
    "title": "Basic Destructuring in ES6",
    "author": "Angie",
    "selfurl": "/posts/4",
    "published": 1496275200000,
    "tags": [
      "es6",
      "destructuring"
    ],
    "displayDate": "2017-06-01"
  }]
}

describe('program', function () {
  it('should return an object that meets the requirements', function () {
    const result = program(posts)
    expect(result).to.deep.equal(expectedResult)
  })
})
