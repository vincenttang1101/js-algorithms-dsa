/* Solution 1: */
function countUniqueValues(arrayInput) {
  let countIndexForUniqueValues = 1
  let countLengthArray = 0

  let flag = false
  if (arrayInput.length === 0) countIndexForUniqueValues = 0

  for (let i = 0; i < arrayInput.length; i++) {
    countLengthArray = i
    for (let j = i + 1; j < arrayInput.length; j++) {
      countLengthArray++

      if (arrayInput[i] !== arrayInput[j] && arrayInput[i] < arrayInput[j]) {
        arrayInput[i + 1] = arrayInput[j]
        flag = true
        break
      }
      flag = false
    }

    if (flag) countIndexForUniqueValues++
    else break

    if (countLengthArray === arrayInput.length - 1) break
  }

  return countIndexForUniqueValues
}

/* Solution 2: */
function countUniqueValues(arrayInput) {
  if (arrayInput.length === 0) return 0
  let i = 0

  for (let j = i + 1; j < arrayInput.length; j++) {
    if (arrayInput[i] !== arrayInput[j]) {
      i++
      arrayInput[i] = arrayInput[j]
    }
  }

  return i + 1
}

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
