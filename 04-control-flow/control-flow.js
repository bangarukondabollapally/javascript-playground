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

// ------------------ Condition Ordering in if-else-if ------------------

let num = 12;

// Version A - checked from high to low
if (num >= 85) {
  console.log("Excellent");
} else if (num >= 60) {
  console.log("Good");
} else if (num >= 40) {
  console.log("Average");
} else {
  console.log("Fail");
}

// Version B - same ranges, conditions written in a different order
if (num < 25) {
  console.log("Fail");
} else if (num >= 40) {
  console.log("Average");
} else if (num < 60) {
  console.log("Good");
} else {
  console.log("Excellent");
}

// Once a branch's condition is true, the rest of the chain is skipped.
// The order you write conditions in changes which branch runs —
// always order if-else-if chains deliberately, not arbitrarily.