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

// 4
let arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

function sortArr(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums);
}
sortArr(arr1);

// 5

let arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function frequentItem(nums) {
  return nums
    .sort(
      (a, b) =>
        nums.filter((v) => v === a).length - nums.filter((v) => v === b).length
    )
    .pop();
}
console.log(`${frequentItem(arr2)} (5 times)`);

// 6
