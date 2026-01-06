// Lesson 1
console.log("===========Lesson1===========")
function  getStudentLevel (score) {
    if (score < 0 || score > 10) {
        return "Invalid score"
    } if (score >= 9) {
        return "Excellent"
    } else if (score >= 8) {
        return "Very Good"
    } else if (score >= 6.5) {
        return "Good"
    } else if (score >= 5) {
        return "Average"
    } else {
        return "Weak"
    }
}
console.log(getStudentLevel (4))
console.log(getStudentLevel (9))
console.log(getStudentLevel (11))

// Lesson 2
console.log("===========Lesson2===========")
function getDaysInMonth(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "Month " + month + " has 31 days"
        case 4:
        case 6:
        case 9:
        case 11:
            return "Month " + month + " has 30 days"
        case 2:
            return "Month " + month + " has 28 days"
        default:
            return "Invalid Month"
    }
}
console.log(getDaysInMonth(7))
console.log(getDaysInMonth(4))
console.log(getDaysInMonth(13))

// Lesson 3
console.log("===========Lesson3===========")
function checkOddEven(number) {
    return (number % 2 === 0) ? "Even" : "Odd"
}
console.log(checkOddEven(13))
console.log(checkOddEven(10))

// Lesson 4
console.log("===========Lesson4===========")
function getTicketPrice(age) {
    const price = 100000
    let ticketPrice = (age < 13) ? (price / 2) : price
    return "Ticket price " + ticketPrice + " VNĐ"
}
console.log(getTicketPrice(12))
console.log(getTicketPrice(15))


// Lesson 5
console.log("===========Lesson5===========")
function toFahrenheit(C) {
    return C * 1.8 + 32
}
console.log(toFahrenheit(30))

// Lesson 6
console.log("===========Lesson6===========")
function getElectricityBill(kwh) {
    let total
    if (kwh <= 50) {
        total = kwh * 1678
    } else if (kwh <= 100) {
        total = (50 * 1678) + ((kwh - 50) * 1734)
    } else if (kwh <= 200) {
        total = (50 * 1678) + (50 * 1734) + ((kwh - 100) * 2014)
    } else {
        total = (50 * 1678) + (50 * 1734) + (100 * 2014) + ((kwh - 200) * 2536)
    }
    return total
}

console.log("Price " + getElectricityBill(51) + " VNĐ")
console.log("Price " + getElectricityBill(500) + " VNĐ")






