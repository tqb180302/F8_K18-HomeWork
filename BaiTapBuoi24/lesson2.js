function isPerfectNumber(n) {
    if (n <= 1) return false
    let sum = 0
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum = sum + i
        }
    }
    return sum === n
}
console.log(isPerfectNumber(6)) //true
console.log(isPerfectNumber(28)) //true
console.log(isPerfectNumber(4)) //false
console.log(isPerfectNumber(8)) //false