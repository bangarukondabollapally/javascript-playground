// ------------------ if-else Statement ------------------

let a = 10;

if (a >= 18) {
  console.log("Allowed to vote");
} else {
  console.log("Not allowed to vote");
}

// ------------------ if-else-if Ladder ------------------

let b = 16;

if (b >= 18) {
  console.log("Allowed to vote");
} else if (b < 18 && b >= 15) {
  console.log("Allowed to drive");
} else {
  console.log("Not allowed to vote and drive");
}

// ------------------ switch Statement ------------------

let n = 3;
switch (n) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// --------- Challenge 1 - Student Grade Logic ---------
let mark = 75;

if(mark>=90){
  console.log("A");
}else if(mark>75 && mark<=90){
  console.log("B");
}else if(mark>60 && mark<=75){
  console.log("C");
}else if(mark>35 && mark<=60){
  console.log("D");
}else{
  console.log("Fail");
}


// --------- Challenge 2 - Rock Paper Scissors ---------
let player1 = "rock";
let player2 = "scissors";

if(player1 === player2){
  console.log("Draw");
}else if(player1 === "rock" && player2 === "scissors"){
  console.log("Player 1 wins");
}else if(player1 === "scissors" && player2 === "rock"){
  console.log("Player 2 wins");
}else if(player1 === "rock" && player2 === "paper"){
  console.log("Player 2 wins");
}else if(player1 === "paper" && player2 === "rock"){
  console.log("Player 1 wins");
}else if(player1 === "scissors" && player2 === "paper"){
  console.log("Player 1 wins");
}else if(player1 === "paper" && player2 === "scissors"){
  console.log("Player 2 wins");
} else {
  console.log("Invalid choice");
}


// --------- Challenge 3 - Login Message ---------
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Welcome Admin");
} else if (isLoggedIn) {
  console.log("Welcome User");
} else {
  console.log("Please login");
}


// --------- Challenge 4 - Weather Advice ---------
let weather = "rainy";
switch(weather){
  case 'rainy':
    console.log("Carry an umbrella");
    break;
  case 'sunny':
    console.log("Wear sunglasses");
    break;
  case 'cloudy':
    console.log("Wear a light jacket");
    break;
  default:
    console.log("Weather is unclear");
    break;
}

// --------- Challenge 5 - Age Checker ---------
let age = 54;

if (age <= 12) {
  console.log("Kid");
} else if (age <= 19) {
  console.log("Teen");
} else if (age <= 59) {
  console.log("Adult");
} else {
  console.log("Senior");
}