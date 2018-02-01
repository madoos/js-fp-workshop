# Requeriments

* Filter posts older than a month (say, 30 days).
* Group the posts by their tags (this might mean posts show up in two groups if they have more than one tag.)
* sort each tag listing by published date, descending.

## Posts

```javascript
[{
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
```

## Result

```javascript
{
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

```
