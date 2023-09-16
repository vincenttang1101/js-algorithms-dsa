function isPalindrome(str) {
  if (str.length === 1) return true
  if (str[0] === str[1]) return true
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))

  return false
}

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
