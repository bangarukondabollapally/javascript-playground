// ----------------------- Arrays create, access, modify ------------------------- 

let fruits = ["apple","banana","mango","kiwi"]; //? Create array
console.log(fruits);

console.log(fruits[0]); //? Access first element
console.log(fruits[1]); //? Access second element
console.log(fruits[2]); //? Access third element
console.log(fruits[3]); //? Access fourth element


fruits[2] = "orange"; //? Modify third element
console.log(fruits); //? Output: ["apple","banana","orange","kiwi"]


// -------------------------- Array Methods -------------------------- 
//! Push
let arr = [1,2,3,4,5];
arr.push(6); //? Adds 6 at end
console.log(arr); //? Output: [1,2,3,4,5,6]

//! Pop
arr.pop(); //? Removes last element
console.log(arr); //? Output: [1,2,3,4,5]

//! Shift
arr.shift(); //? Removes first element
console.log(arr); //? Output: [2,3,4,5]

//! Unshift
arr.unshift(0); //? Adds element at start
console.log(arr); //? Output: [0,2,3,4,5]

//! splice
//? Syntax : arr.splice(index start, no.of elements)
arr.splice(2,1);  //! Updates the existing array - removes the element 3 from the array
console.log(arr); //? Output: [0,2,4,5]

//! Slice
let newArr = arr.slice(0,3); //! Creates a new array
console.log(arr); //? [0,2,4,5]
console.log(newArr); //? Output: [0,2,4]


// --------------- functions ----------------------
//! Reverse
let array = [1,2,3,4,5];
console.log(array.reverse()); //! Reverse the array - changes original array

//! Sort
let array2 = [1,9,3,5,10,7];
console.log(`Ascending Order: ${array2.sort((a,b)=>a-b)}`) //! Ascending Order - changes original array

array2 = [1,9,3,5,10,7];
console.log(`Original array: ${array2}`);
console.log(`Descending Order: ${array2.sort((a,b)=>b-a)}`); //! Descending Order - changes original array

//! Map - creates new array
let array3 = [11,20,7,12,8];
let newArray3 = array3.map((val)=>{
    if(val>10) return val; //? returns only values >10 and rest are undefined
})

console.log(newArray3); //? [11,20,undefined,12,undefined]
//! Common mistake: map must return something for every element.
//! If you only want to keep some values, use filter() first, then map().


//! Filter
let array4 = [1,2,3,4,5,6,7,8,9,10];
let newArray4 = array4.filter((val)=>{
    if(val%2==0) return true;
})
console.log(newArray4) //? [2,4,6,8,10]


//! Reduce

let array5 = [1,2,3,4,5];
let newArray5 = array5.reduce((acc,val)=>{
    return acc+val;
},0)

console.log(newArray5); //? 15


//! Find
let array6 = [1,2,3,4,5];
let ans = array6.find((val)=>{
    return val === 3; //? returns the element itself when the condition matches
})
console.log(ans); //? 3


//! Some - returns boolean if even one element is true
let array7 = [11,30,70,50,60,74];

let ans2 = array7.some((val)=>{
    if(val>50) return true;
    return false;
})
console.log(ans2); //? true


//! Every - returns boolean if all elements are true

let ans3 = array7.every((val)=>{
    if(val>=30) return true;
    return false;
})
console.log(ans3); //? false - because 11 is not >= 30


// ----------------------loops -------------------------
//! forEach

let array8 = [1,2,3,4,5,6];

array8.forEach((val)=>{
    console.log(val);
})


// ------------------ Destructing and Spread Operator ------------------ 
//! Destructing

let array9 = [1,3,4,6,7,8];
let [a,b,,d,e]=array9;
console.log(a); //? 1
console.log(b); //? 3
console.log(d); //? 6
console.log(e); //? 7


//! Spread Operator

let array10 = [1,2,3,4,5,6];
let newarray10 = array10; //? reference copy, not an actual copy

let Spread = [...array10]; //? creates an actual (independent) copy

newarray10.push(99);
Spread.push(100);

console.log(array10);    //? [1,2,3,4,5,6,99] — reference copy affected the original too
console.log(newarray10); //? [1,2,3,4,5,6,99]
console.log(Spread);     //? [1,2,3,4,5,6,100] — independent, didn't affect array10




// ------------------ Challenge 1 - Array of student names ------------------ 

let students = ["ankit", "akash", "mohit", "rahul", "sumit"];

students.forEach((stu)=>{
    console.log(stu);
})


// ------------------ Challenge 2 - Print only even numbers ------------------ 
let nums = [1,2,3,4,5,6,7,8,9,10];

nums.forEach((val)=>{
    if(val%2==0) console.log(val);
})


// ------------------ Challenge 3 - Map array of prices to include 18% gst ------------------ 

let prices = [10000,20000,30000,40000,50000];

let newPrices = prices.map((val)=>{
    return val+(val*18/100);
})
console.log(newPrices);


// ------------------ Challenge 4 - Reduce array of salaries ------------------ 

let salaries = [10000,20000,30000,40000,50000];

let newSalaries = salaries.reduce((acc,val)=>{
    return acc+val;
},0)

console.log(newSalaries);


// ------------------ Challenge 5 - first student with grade A ------------------ 
let grades = ["b","c","d","f","a","c","f"];

let newGrades = grades.find((val)=>{
    if(val=="a") return true;
    return false;
})

console.log(newGrades); //? a


// ------------------ Challenge 6 - Write a function to reverse an array ------------------ 
function reverseArray(arr){
    return arr.reverse(); //! changes the original array
}

let arrayRev = [1,2,3,4,5];
console.log(reverseArray(arrayRev));


// ------------------ Challenge 7 - Sort an array of ages in ascending order ------------------ 

let ages = [10,2,3];
ages.sort();
console.log(ages); //? [10, 2, 3] - default sort() compares values as strings 

ages.sort((a,b)=>a-b);
console.log(ages); //? [2, 3, 10] - correct numeric sort



// ------------------ Challenge 8 - Destructure the first two elements of an array ------------------ 

let elements = [1,2,3,4,5]
let [e1,e2] = elements;
console.log(e1, e2);


// ------------------ Challenge 9 - Use .some() to check if any student failed ------------------ 

let grades1 = ["a","b","c","f","a"];
let newGrade = grades1.some((val)=>val=="f");
console.log(newGrade);


// ------------------ Challenge 10 - Use spread operator to copy an array and add a new item ------------------ 

let original = [1,2,3,4,5,6];
let spread = [...original];
spread.push(99);
console.log(spread);
console.log(original);