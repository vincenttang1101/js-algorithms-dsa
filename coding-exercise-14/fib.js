function fib(number) {
  if (number === 1 || number === 2) return 1
  return fib(number - 1) + fib(number - 2)
}

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465

