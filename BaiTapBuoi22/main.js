// Lesson 1
console.log("===========Lesson1===========")
function arrangeScore(score) {
    if (score < 0 || score > 10) {
        console.log("Invalid score")
        return;
    }
    if (score >= 9) {
        console.log("Excellent")
    } else if (score >= 8) {
        console.log("Very Good")
    } else if (score >= 6.5) {
        console.log("Good")
    } else if (score >= 5) {
        console.log("Average")
    } else {
        console.log("Weak")
    }
}
arrangeScore(9);

// Lesson 2
console.log("===========Lesson2===========")
function numberDayInMonth(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Month " + month + " has 31 days")
            break
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Month " + month + " has 30 days")
            break
        case 2:
            console.log("Month " + month + " has 28 days")
            break
        default:
            console.log("Invalid Month")
    }
}
numberDayInMonth(4)

// Lesson 3
console.log("===========Lesson3===========")
let n = 8
let result = (n % 2 === 0) ? "Even" : "Odd"
console.log(result)

// Lesson 4
console.log("===========Lesson4===========")
let age = 10
const price = 100000
let ticketPrice = (age < 13) ? (price / 2) : price
console.log("Ticket price " + ticketPrice + " VNĐ" )

// Lesson 5
console.log("===========Lesson5===========")
function changeDegree(C) {
    return C * 1.8 + 32
}
console.log(changeDegree(30))

// Lesson 6
console.log("===========Lesson6===========")
function getElectricityBill(kwh) {
    let total
    if (kwh <= 50) {
        total = kwh * 1678
    } else if (kwh <= 100) {
        total = (50 * 1678) + ((kwh - 50) * 1743)
    } else if (kwh <= 200) {
        total = (50 * 1678) + (50 * 1743) + ((kwh - 100) * 2014)
    } else {
        total = (50 * 1678) + (50 * 1743) + (100 * 2014) + ((kwh - 200) * 2536)
    }
    return total
}

console.log("Price " + getElectricityBill(51) + " VNĐ")






