const fullName = "Aelin";
let age = 18;
let isStudent = true;
let favoriteColour = "White";

console.log("Task 6");

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(favoriteColour, typeof favoriteColour);

age = 19;
console.log("Reassigned age:", age);

console.log("Task 7");

let userName = prompt("What is your name");
alert("Hello, " + userName + "!");

const group = "MT-2505";
console.log("My name is " + fullName + " my group is " + group);

console.log("Task 8");
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);


console.log("Task 9");

const myName = "Aelin";
console.log("Length:", myName.length);
console.log("Uppercase:", myName.toUpperCase());
console.log("Lowercase:", myName.toLowerCase());
console.log("First 3 characters:", myName.slice(0, 3));

const text1 = "I study";
const text2 = "Media Technologies";
console.log(text1 + " " + text2);


console.log("Task 10");
let counter = 10;

counter++;
console.log("Increment:", counter);

counter--;
console.log("Decrement:", counter);

counter += 5;
console.log("Add 5:", counter);

counter -= 3;
console.log("Subtract 3:", counter);

counter *= 2;
console.log("Multiply by 2:", counter);

counter /= 4;
console.log("Divide by 4:", counter);


console.log("Task 11");

let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;
console.log("Dog age:", dogAge, "Human age:", humanAge);

dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;
console.log("Dog age:", dogAge, "Human age:", humanAge);

console.log("Task 12");

function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Aelin");
greetUser("Traveler");

function calculateSum(a, b) {
    return a + b;
}
console.log("Sum 1:", calculateSum(10, 15));
console.log("Sum 2:", calculateSum(100, 250));

function calculateRectangleArea(width, height) {
    return width * height;
}
console.log("Area 1:", calculateRectangleArea(5, 8));
console.log("Area 2:", calculateRectangleArea(12, 4));