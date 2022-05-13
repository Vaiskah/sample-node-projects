const fs = require("fs");

// Sync file system.

// const first = fs.readFileSync("./folder/first.txt", "utf8");
// const second = fs.readFileSync("./folder/second.txt", "utf8");

// console.log(first, second);

// fs.writeFileSync(
//   "./folder/result-sync.txt",
//   `Here is the result : ${first}  ${second}`,
//   { flag: "a" }
// );
// flag : 'a' , it adds a copy of the text in that file.

// Async file system.
console.log("Start");
fs.readFile("./folder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile("./folder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    fs.writeFile(
      "./folder/result-async.txt",
      "This is an Asynchronous file",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done the result");
      }
    );
  });
});
console.log("going to next step");
// This is callback hell....it is asynchoronose
