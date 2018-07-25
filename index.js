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
   var newArray = kittens.splice()
   newArray.push(name)
   return newArray
}