// ------------------ Creating Objects ------------------

let obj = {
    name: "John Doe",
    age: 28,
    city: "New York"
}

console.log(obj);
console.log(obj.name);



// ------------------ Dot vs Bracket Notation ------------------

let nm = "name";
console.log(obj[nm]);  //? John Doe - bracket notation uses the value stored in nm
console.log(obj.nm);   //? undefined - dot notation looks for a literal key named "nm", which doesn't exist



// ------------------ Nesting and Deep Access ------------------

let user = {
    name: "John",
    address: {
        city: "New York",
        zip: "12345",
        geo: {
            lat: 40.7128,
            lng: -74.0060
        },
    },
};

console.log(user);
console.log(user.address);
console.log(user.address.geo);
console.log(user.address.geo.lat);



// ------------------ Object Destructuring ------------------

let { lat, lng } = user.address.geo;
console.log(lat, lng);



// ------------------ for...in ------------------

let details = {
    name: "John",
    age: 28,
    city: "New York"
}

for (let key in details) {
    console.log(`${key} : ${details[key]}`);
}



// ------------------ Object.keys / Object.values / Object.entries ------------------

console.log(Object.keys(details));   //? [ 'name', 'age', 'city' ] - array of keys
console.log(Object.values(details)); //? [ 'John', 28, 'New York' ] - array of values
console.log(Object.entries(details));//? [ [ 'name', 'John' ], [ 'age', 28 ], [ 'city', 'New York' ] ] - array of [key, value] pairs



// ------------------ Spread Syntax (Shallow Copy) ------------------

let obj2 = { ...details };
console.log(details);
console.log(obj2);



// ------------------ Object.assign (Shallow Copy) ------------------

//? Object.assign(target, source) - source's properties are copied INTO target, target is returned (and mutated)
let obj3 = Object.assign({ pin: 110028 }, details);
console.log(obj3); //? { pin: 110028, name: 'John', age: 28, city: 'New York' }



// ------------------ Deep Clone ------------------

console.log(user);
let newobj = { ...user };
console.log(newobj);

user.address.city = "Delhi";

console.log(user.address.city);   //? Delhi
console.log(newobj.address.city); //? Delhi - shallow copy shares the same nested "address" object, so this changed too (spread is NOT a deep copy)

//? True deep copy - only works for plain data (no functions, undefined, etc.)
let newobj2 = JSON.parse(JSON.stringify(user));
console.log(newobj2);

newobj2.address.city = "Mumbai";
console.log(user.address.city);   //? Delhi - untouched, since newobj2 is a fully independent deep copy
console.log(newobj2.address.city);//? Mumbai



// ------------------ Optional Chaining ------------------

console.log(user?.profile?.city);      //? undefined - profile doesn't exist, but optional chaining prevents a TypeError
console.log(user?.address?.geo?.lat);  //? 40.7128 - safely reaches a value that does exist



// ------------------ Computed Properties ------------------

let role = "Role";
let dev = {
    name: "John",
    [role]: "frontend Engineer" //? the key becomes the VALUE stored in role, not the word "role" itself
}
console.log(dev); //? { name: 'John', Role: 'frontend Engineer' }



// ------------------ Challenge 1 - Create an object for a book (title, author, price) ------------------

let book = {
    title: "The Great Gatsby",
    author: "John Doe",
    price: 100
}
console.log(book);


// ------------------ Challenge 2 - Access properties using both dot and bracket notation ------------------

console.log(book.title);  //? The Great Gatsby - dot notation
console.log(book["author"]); //? John Doe - bracket notation


// ------------------ Challenge 3 - Write a nested object (a user with an address and a location) ------------------

let user2 = {
    name: "John",
    address: {
        city: "New York",
        zip: "12345",
        geo: {
            lat: 40.7128,
            lng: -74.0060
        },
    },
};
console.log(user2);


// ------------------ Challenge 4 - Destructure name and age from a student object ------------------

let student = {
    name: "John",
    age: 28,
    city: "New York"
}
let { name, age } = student;
console.log(name, age);


// ------------------ Challenge 5 - Loop through the keys and values of an object ------------------

for (let key in student) {
    console.log(`${key} : ${student[key]}`);
}


// ------------------ Challenge 6 - Convert an object to an array using Object.entries() ------------------

console.log(Object.entries(student)); //? [ [ 'name', 'John' ], [ 'age', 28 ], [ 'city', 'New York' ] ]


// ------------------ Challenge 7 - Copy an object using the spread operator ------------------

let student2 = { ...student };
console.log(student2);


// ------------------ Challenge 8 - Create a deep copy of an object with a nested structure ------------------

let user3 = JSON.parse(JSON.stringify(user2));
console.log(user3);


// ------------------ Challenge 9 - Use optional chaining to safely access a deeply nested value ------------------

console.log(user?.profile?.city);
console.log(user?.address?.geo?.lat);


// ------------------ Challenge 10 - Use a variable as a key using computed properties ------------------

let empType = "Role";
let emp = {
    name: "John",
    [empType]: "frontend Engineer"
}
console.log(emp);