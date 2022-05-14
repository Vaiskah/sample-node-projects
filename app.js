const fs = require("fs");
const { reject } = require("lodash");
const { resolve } = require("path");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        resolve(data);
      }
    });
  });
};
const start = async () => {
  try {
    const first = await getText("./folder/first.txt");
    const second = await getText("./folder/second.txt");
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();
