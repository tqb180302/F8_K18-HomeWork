// Task1
console.log("========Task1=======")
let classA = ["An", "Binh", "Chi"];
let classB = classA;
classB[0] = "An Updated";
console.log(classA);
//?? Why was the name "An" in classA changed even though you only modified classB? Explain using the concept of Memory Addresses (e.g., 0x01).
// Answer: When variable classA is created, the computer allocates a memory block at address 0x01 to store the list ['An', 'Binh', 'Chi'].
// The variable classA itself only holds the address 0x01, not the actual list. When initializing classB = classA, classB also points to address 0x01. Therefore, when classB modifies the data at 0x01, the data in classA changes as well.

// Task2
console.log("========Task2=======")
let x = "10";
let y = 2;
console.log(x + y);      // Result 1
console.log(x - y);      // Result 2
console.log(x * "3");    // Result 3
console.log("Hello" - y);// Result 4

// Question 1: Explain why the addition (+) results in "102" while the subtraction (-) results in 8.
// Addition ("10" + 2): In JavaScript, the + operator has two functions: numeric addition and string concatenation. If either operand is a string, JavaScript prioritizes concatenation. The number 2 is converted into the string "2", resulting in "10" + "2" = "102".
// Subtraction ("10" - 2): The - operator is used strictly for mathematics. JavaScript attempts to convert the string "10" into the number 10 to perform the calculation, resulting in 10 - 2 = 8.

//Question2: What does the result NaN in the last calculation mean? Why did it happen?
// In the calculation "Hello" - y: The - operator attempts to convert the string "Hello" into a number to perform the math. However, since "Hello" is not a valid number, the conversion fails and returns NaN (Not-a-Number). Any number minus NaN results in NaN

// Task3
console.log("========Task3=======")

let age = 9
let mathScore = 10

let isVIP = false
let canEnter = (age >= 10 && mathScore > 7) || isVIP
console.log("case 1:", canEnter)

isVIP = true
canEnter = (age >= 10 && mathScore > 7) || isVIP
console.log("case 2:", canEnter)

//Question: Is !(age < 10) mathematically the same as age >= 10??
//Answer: Yes. '!' is negative. The negation of < 10 is all remaining cases: >= 10.

// Task4
console.log("========Task4=======")

const laptop = {
    brand: "Dell",
    price: 1000,
    spec: { ram: "8GB", ssd: "256GB" }
};

const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand);      // "Apple"
console.log(laptop.spec.ram);   //"16GB"

// Question: Explain why the changes made to myLaptop and mySpec affected the original laptop object?
// The variables myLaptop and mySpec are just different names sharing the same memory address. They point to the exact same single data location in memory, so changing one affects them all.

