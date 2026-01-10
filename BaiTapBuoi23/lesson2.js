function isPerfectSquare(n) {
    if (n < 0) return false
    const i = n ** (1/2)
    return i % 1 === 0
}
console.log(isPerfectSquare(-10)) // false
console.log(isPerfectSquare(29))  // false
console.log(isPerfectSquare(5))  // false
console.log(isPerfectSquare(16))  // true
console.log(isPerfectSquare(4)); // true
console.log(isPerfectSquare(25))  // true
