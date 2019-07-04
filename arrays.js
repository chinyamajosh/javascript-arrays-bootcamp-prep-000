var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  function addElementToBeginningOfArray(array) {
    return ["foo", ...array];
  }
  
function  destructivelyAddElementToBeginningOfArray(array) {
  [array.unshift('foo')]
  return array
}

function addElementToEndOfArray(array) {
  return [...array, "foo"];
}

function destructivelyAddElementToEndOfArray(array) {
 [array.push('foo')];
 return array
}

function accessElementInArray(array) {
  return (array[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift()
 return array
}

 function removeElementFromBeginningOfArray(array) { 
   return array.slice(1)
 }

 function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array
 }
 
 function removeElementFromEndOfArray(array) {
   return array.slice(0, array.length - 1)
 }