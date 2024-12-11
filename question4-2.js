// p21
const p21 = new Promise((resolve, reject) => {
  resolve("Success!");
});

// f21
const f21 = (value) => {
  console.log("f21 called with value:", value);
  throw new Error("Error in f21");
};

// f22
const f22 = (error) => {
  console.log("f22 called with error:", error.message);
};

console.log("Program 21:");
p21.then(f21).catch(f22);

console.log("Program 22:");
p21.then((value) => { f21(value); }).catch(f22);
