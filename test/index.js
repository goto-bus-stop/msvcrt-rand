var test = require('tape')
var rand = require('../')
var make = require('../make')

test('generates numbers', function (t) {
  t.plan(1)

  t.equal(typeof rand(), 'number')
})

test('can seed the generator', function (t) {
  t.plan(1)

  rand.seed(38)
  t.equal(rand(), 162)
})

test('create separate instances with initial seed', function (t) {
  t.plan(2)
  var rand = make(38)
  var rand2 = make(38)
  var results = ten(rand)
  var results2 = ten(rand2)

  var expected = [
    162,
    22942,
    11948,
    32107,
    7593,
    29941,
    28334,
    19353,
    15298,
    26361
  ]

  t.deepEqual(results, expected)
  t.deepEqual(results2, expected)
})

function ten (fn) {
  var arr = []
  while (arr.length < 10) {
    arr.push(fn())
  }
  return arr
}
