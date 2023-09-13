function factorial(number){
    if (number <= 1) return 1
    return number * factorial(number - 1)
 }
   
 factorial(1) // 1
 factorial(2) // 2
 factorial(4) // 24
 factorial(7) // 5040
 