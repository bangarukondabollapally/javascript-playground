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