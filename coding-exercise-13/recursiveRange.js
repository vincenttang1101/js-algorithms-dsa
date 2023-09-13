function recursiveRange(number){
    if (number === 0) return 0
    return number + recursiveRange(number - 1)
 }
 
 recursiveRange(6) // 21
 recursiveRange(10) // 55 
 