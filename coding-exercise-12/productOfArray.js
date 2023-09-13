function productOfArray(array) {
    if (array.length === 0) return 0
    if (array.length === 1) return array[0]
    return array[0] * productOfArray(array.splice(1))
}

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60