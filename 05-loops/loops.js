// ------------------ for Loop ------------------

/*
for (initialize; condition ; increment/decrement) {
    // Code
}
*/

for(let i=1; i<11;i++){
    console.log(i);
}



// ------------------ while Loop ------------------

/*
while (condition) {
  // Code
}
*/

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}



// ------------------ do-while Loop ------------------

/*
do {
  // Code
} while (condition);
*/

let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);



// ------------------ break ------------------

for(let i=1; i<11;i++){
    if(i==5){
        break;
    }
    console.log(i);
}



// ------------------ continue ------------------

for(let i=1; i<11;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}



// ------------------ Challenge 1 - 1 to 10 numbers using for loop ------------------
for(let i=1;i<11;i++){
    console.log(i);
}


// ------------------ Challenge 2 - Even numbers between 1 and 20 ------------------
for(let i=1;i<21;i++){
    if(i%2==0){
        console.log(i);
    }
}


// ------------------ Challenge 3 - Reverse a string using a loop ------------------
let str = "hello";
let rev = "";
for(let i=str.length-1;i>=0;i--){
    rev += str[i];
}
console.log(rev);


// ------------------ Challenge 4 - Sum of all numbers in an array using a loop ------------------
let arr = [1,2,3,4,5];
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
console.log(sum);


// ------------------ Challenge 5 - Use continue to skip a specific number ------------------
for(let i=1;i<11;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}


// ------------------ Challenge 6 - Guess the number game – use while to ask until correct ------------------
let num = 5;
let guess = null;

while (guess != num) {
  guess = prompt("Guess the number");
  if (guess === null) break; // user cancelled
  console.log(guess == num ? "Correct" : "Wrong");
}


// ------------------ Challenge 7 - Print a triangle pattern using * ------------------
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}