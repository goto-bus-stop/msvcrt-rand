module.exports = function make (initialSeed) {
  var value = initialSeed

  function seed (newSeed) {
    value = newSeed
  }
  function rand () {
    value = (((value * 214013) | 0) + 2531011) | 0
    return (value >> 16) & 0x7fff
  }

  rand.seed = seed

  return rand
}
