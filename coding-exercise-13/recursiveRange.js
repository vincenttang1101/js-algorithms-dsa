function recursiveRange(number){
    if (number === 0) return 0
    if (number === 1) return 1
    return number + recursiveRange(number - 1)
 }
 
 recursiveRange(6) // 21
 recursiveRange(10) // 55 
 