/* Solution 1:
function areThereDuplicates() {
    const collection = {}
    
    for (let key in arguments) 
        collection[arguments[key]] = (collection[arguments[key]] || 0) + 1
    
    for (let key in collection) 
        if (collection[key] > 1) return true
    
    console.log(collection)
    return false
}
*/

/* Solution 2: 
function areThereDuplicates(...args) {
  // Two pointers
  args.sort()

  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}
*/

/* Solution 3: */
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
