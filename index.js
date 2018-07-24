var kitten = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
   kittens.push("Ralph")
  }
  
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
   kittens.splice(1, 0, name)
   return kittens
}