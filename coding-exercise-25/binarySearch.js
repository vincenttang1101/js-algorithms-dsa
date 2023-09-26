function binarySearch(arr, target) {
  let startIdx = 0
  let endIdx = arr.length - 1
  let middleIdx = Math.floor((startIdx + endIdx) / 2)

  while (arr[middleIdx] !== target && startIdx <= endIdx) {
    if (arr[middleIdx] < target) startIdx = middleIdx + 1
    else endIdx = middleIdx - 1

    middleIdx = Math.floor((startIdx + endIdx) / 2)
  }
  return arr[middleIdx] === target ? middleIdx : -1
}

binarySearch([1, 2, 3, 4, 5], 2) // 1
binarySearch([1, 2, 3, 4, 5], 3) // 2
binarySearch([1, 2, 3, 4, 5], 5) // 4
binarySearch([1, 2, 3, 4, 5], 6) // -1
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1
