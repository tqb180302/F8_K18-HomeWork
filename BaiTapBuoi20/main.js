//Phần 1
console.log("==========Phan 1===========")
let name = "Tran Quoc Bao";
let age = 23;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);

let a = 5;
let b = 10;

a = 5000;
b = 10000;

console.log("Gia tri moi cua a:", a);
console.log("Gia tri moi cua b:", b);

//Phần 2
// Trả lời bằng comment trong code:
//     const khác let ở điểm nào? - const is used to declare constants and CANNOT be reassigned.
//                                - let is used to declare variables that CAN be reassigned.
//     Khi nào nên dùng const? - Use const when declaring constants that you do not intend to reassign.

// Đoạn code sau đúng hay sai? Giải thích:
// "const x = 10;
// x = 20;"		- False, because const variables cannot be reassigned

// Phần 3
console.log("==========Phan 3===========")
// Xác định kiểu dữ liệu của các giá trị sau (ghi comment):
// 100                     - Number
// 100                     - String
// TRUE                    - Bool
// [1, 2, 3]               - Object
// { name: "An", age: 20 } - Object
// null                    - Object
// undefined               - Undefined

let student = {
    name: "Tran Quoc Bao",
    age: "23",
    scores: [8, 9, 8]
}
console.log(student)

//Phần 4
console.log("==========Phan 4===========")
let x = "1000"
x = Number(x)
console.log("'1000' sau khi ep kieu: ", typeof x)

let y = 1000
y = String(y)
console.log("1000 sau khi ep kieu: ", typeof y)

let z = true
z = String(z)
console.log("true sau khi ep kieu: ", typeof z)

//Phần 5
// Dự đoán kết quả (true / false):
// Boolean(0)           - false
// Boolean(1)           - true
// Boolean("")          - false
// Boolean("hello")     - true
// Boolean(null)        - false
// Boolean([]           - true (mảng rỗng)

//Phan 6
console.log("==========Phan 6===========")
const numbers = [4, 3, 1, 5, 1];
console.log("Phan tu dau tien", numbers[0])
console.log("Phan tu cuoi cung", numbers[4])

// Giải thích bằng lời (không cần code):
// Vì sao khi gán:
//     const a = numbers;
//
// thì a và numbers lại liên quan đến cùng một vùng nhớ? - a and numbers point to the same memory location because when assigning an object or array, JavaScript copies the address, not the data


