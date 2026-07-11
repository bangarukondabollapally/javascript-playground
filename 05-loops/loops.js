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