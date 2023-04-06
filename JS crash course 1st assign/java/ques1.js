let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

if (num1 > num2) {
  console.log(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  console.log(num2 + " is larger than " + num1);
} else {
  console.log("The two numbers are equal.");
}