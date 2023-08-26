function areThereDuplicates() {
    const collection = {}
    
    for (let key in arguments) 
        collection[arguments[key]] = (collection[arguments[key]] || 0) + 1
    
    for (let key in collection) 
        if (collection[key] > 1) return true
    
    console.log(collection)
    return false
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 