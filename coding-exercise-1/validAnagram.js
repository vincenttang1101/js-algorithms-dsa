/* Solution 1:
function validAnagram(str1, str2){
    if (str1.length !== str2.length)  return false
    
    for (let i=0; i<str1.length; i++) {
        const correctIndex = str2.indexOf(str1[i])

        if (correctIndex === -1)  return false
        str2 = str2.slice(0, correctIndex) + str2.slice(correctIndex + 1);
    }
    return true
}
*/

/* Solution 2: */
function validAnagram(str1, str2) {
  let lookup = {}

  if (str1.length !== str2.length) return false

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]

    if (!lookup[letter]) return false
    lookup[letter] -= 1
  }

  return true
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
