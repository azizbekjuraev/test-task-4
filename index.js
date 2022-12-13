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

function stringToArr(s) {
  return s.trim().split(" ");
}

console.log(stringToArr(`Robin Singh`));

// 7

function isWeekend(d) {
  let date = new Date(d);
  if (date.getDate() == 6 || date.getDay() == 0) {
    console.log(`Weekend`);
  } else {
    console.log(`Not Weekend`);
  }
}

isWeekend("Dec 11, 2022");

// 8

function randomNum(n1, n2) {
  return Math.floor(Math.random() * (n1 - n2));
}

console.log(randomNum(20, 1));

// 9

function uppercaseOrNot(str) {
  let letter = /^[A-Z]/;
  if (letter.test(str)) {
    console.log(`Uppercase`);
  } else {
    console.log(`Not Uppercase`);
  }
}
uppercaseOrNot(`Azizbek`);

// 10

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let i = 0; i < library.length; i++) {
  let readBook = `You have finished ${library[i].title} by ${library[i].author}`;
  let haveNotRead = `You have not read ${library[i].title} by ${library[i].author}`;

  if (library[i].readingStatus) {
    console.log(readBook);
  } else {
    console.log(haveNotRead);
  }
}

// 11

function booleanCheck(v) {
  console.log(v);
  if (typeof v === "boolean") {
    console.log(`Value is Boolean`);
  } else {
    console.log(`LOL, error404`);
  }
}

booleanCheck(true);

//12
// The most difficult one!

let word, str;

function makeTable(str) {
  const table = new Array(str.length);
  let maxPrefix = 0;
  table[0] = 0;

  for (let i = 1; i < str.length; i++) {
    while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
      maxPrefix = table[maxPrefix - 1];
    }

    if (str.charAt(maxPrefix) === str.charAt(i)) {
      maxPrefix++;
    }
    table[i] = maxPrefix;
  }
  return table;
}

function stringSearch(str, word) {
  const prefixes = makeTable(word);
  const matches = [];
  let j = 0;
  let i = 0;

  while (i < str.length) {
    if (str.charAt(i) === word.charAt(j)) {
      i++;
      j++;
    }
    if (j === word.length) {
      matches.push(i - j);
      j = prefixes[j - 1];
    } else if (str.charAt(i) !== word.charAt(j)) {
      if (j !== 0) {
        j = prefixes[j - 1];
      } else {
        i++;
      }
    }
  }
  return matches;
}
str = "The quick brown fox jumps over the lazy dog.";
word = "the";
console.log(stringSearch(str, word));

//13

let arr13 = [NaN, 0, 15, false, -22, "", undefined, 47, null];

const onlyNumbers = arr13.filter((el) => typeof el === "number");

onlyNumbers.shift(); //removing NaN
onlyNumbers.shift(); // removing 0

console.log(onlyNumbers);

//14

function methodFinder(obj) {
  return Object.getOwnPropertyNames(obj);
}

console.log(methodFinder(Array));
