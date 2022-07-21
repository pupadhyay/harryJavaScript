console.log("We are in tut7.js and we discuss about arrays.");

let marks = [34, 23, 24, 93, 73, 25];
const fruits = ["Orange", "Apple", "Pineapple"];
const mixed = ["str", 89, [3, 5]];

const arr = new Array(23, 123, 21, "Mango");
//console.log(marks);
// console.log(marks);
// console.log(fruits);
// console.log(mixed);
// console.log(arr.length);
// console.log(Array.isArray(fruits)); // isArray will check that entered value as fruits . If the enterd value is Array returb true else false

arr[0] = "harry";
let arrElement = arr[0];
//console.log("Element : ", arrElement);
//console.log(arr);

let value = marks.indexOf(73); // Array element position
//console.log(value);

// Mutating or Modifying arrays
//marks.push(1554); // Adding array element in end
//marks.unshift(3554); // Adding array element in start
//marks.pop(); // pop will remove one element from end
//marks.shift(); // shift will remove element from start
//marks.splice(1, 2); // Splice will remove from index 1 to index 2 element
//marks.reverse(); // reverse complete array

let marks2 = [1, 2, 3, 7];
marks = marks.concat(marks2);
//console.log(marks);

let myObj = {
  "First Name": "Pramod",
  channel: "codeWithHarry",
  isActive: true,
  marks: [1, 5, 3, 6],
};

console.log(myObj);
console.log(myObj["First Name"]); // We can access if there is space
console.log(myObj.channel);
