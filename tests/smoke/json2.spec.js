const user = { name: "Alex" }; // This is an Object, NOT an Array

// BAD: Using typeof
if (typeof user === "object") {
  // JavaScript enters this block because typeof user is "object"
  //user.push("Sam"); 
  // CRASH! TypeError: user.push is not a function
}

// GOOD: Using Array.isArray()
if (Array.isArray(user)) {
  // JavaScript safely skips this block because it evaluates to false
  user.push("Sam"); 
}
