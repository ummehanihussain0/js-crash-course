var num1 = prompt("Enter number 1:");
var num2 = prompt("Enter number 2:");
var num3 = prompt("Enter number 3:");
var num4 = prompt("Enter number 4:");
var num5 = prompt("Enter number 5:");

var max = num1;

if(num2 > max) {
  max = num2;
}

if(num3 > max) {
  max = num3;
}

if(num4 > max) {
  max = num4;
}

if(num5 > max) {
  max = num5;
}

console.log("The largest number is: " + max);
