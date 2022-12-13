"use strict";

//1

const date = new Date();
const time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
const weekDay = date.toLocaleString("default", { weekday: "long" });
const output = `Today is : ${weekDay}. Current time is : ${time}`;
// console.log(time);
console.log(output);

//2

function NumReverser(n) {
  let r = n.toString().split("").reverse().join("");
  return parseInt(r);
}

console.log(NumReverser(32243));
console.log(NumReverser(45522));

//3

for (let i = 0; i <= 15; i++) {
  if (i === 0) {
    console.log(`${i} is even`);
  } else if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
