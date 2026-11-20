const data = [1, 2, 3];

const data1 = {
    name: "Rohit"
};

console.log(typeof data); 
//JS falsely thinks arrays as object, so use Array.isArray to check if its array
console.log(typeof data1);

console.log(Array.isArray(data));