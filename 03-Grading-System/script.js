// Grading System

let number = prompt("Enter your marks = "); // Here student give his/her marks

if (number >= 0 && number <= 100) {
    if(number >= 80 && number <= 100){
        console.log(`Your grade is A+. Congratulations!`);
    } else if(number >= 75 && number <= 79){
        console.log(`Your grade is A. Congratulations!`);
    } else if(number >= 70 && number <= 74){
        console.log(`Your grade is A-. Congratulations!`);
    } else if(number >= 65 && number <= 69){
        console.log(`Your grade is B+. You have to do better!`);
    } else if(number >= 60 && number <= 64){
        console.log(`Your grade is B. You have to do better!`);
    } else if(number >= 55 && number <= 59){
        console.log(`Your grade is B-. You have to do better!`);
    } else if(number >= 50 && number <= 54){
        console.log(`Your grade is C+. Need more exercise indeed!`);
    } else if(number >= 45 && number <= 49){
        console.log(`Your grade is C. Need more exercise indeed!`);
    } else if(number >= 40 && number <= 44){
        console.log(`Your grade is D. Come with your parents!`);
    } else {
        console.log(`Your grade is F. Better Luck Nex Time!`);
    }
} else {
  console.log("Invalid Marks! Please enter marks between 0 to 100.");
}
