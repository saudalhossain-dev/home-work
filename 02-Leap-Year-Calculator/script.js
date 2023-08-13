// Leap Year Calculator

// 2020 
// 2019

var year = prompt("Enter Your Year");

if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
    console.log(year + " year is Leap Year!");
} else {
    console.log(year + " year is not Leap Year!");
}