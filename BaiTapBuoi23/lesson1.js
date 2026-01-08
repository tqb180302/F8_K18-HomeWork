function getTriangle (a, b, c) {

    const isEquilateral = a === b && b === c
    const isIsosceles = a === b || b === c || a === c
    const isRight = a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b

    if (a <= 0 || b <= 0 || c <= 0) {
        return "Invalid input"
    } else if (a + b <= c || a + c <= b || b + c <= a) {
        return "Not a triangle"
    } else if (isEquilateral) {
        return "Equilateral triangle"
    } else if (isRight && isIsosceles) {
        return "Isosceles right triangle"
    } else if (isRight) {
        return "Right triangle"
    } else if (isIsosceles) {
        return "Isosceles triangle"
    } else {
        return "Scalene triangle"
    }
}

console.log(getTriangle(0 , 1, 4)) //Invalid input
console.log(getTriangle(3 , 1, 4)) //Not a triangle
console.log(getTriangle(3, 4, 5)) // Right triangle
console.log(getTriangle(2, 2, 2)) // Equilateral triangle
console.log(getTriangle(2, 2, 3)) // Isosceles triangle

