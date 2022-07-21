// type conversion
//console.log("Welcome tutorial 5");
let myVar;
myVar = String(34);
// console.log(myVar, typeof myVar);

let booleanVar = String(true);
// console.log(booleanVar, typeof booleanVar);

let date = String(new Date());
// console.log(date, typeof date);s

//let arr = [1, 2, 3, 4, 5, 6];
let arr = String([1, 2, 3, 4, 5, 6]);
//console.log(arr.length, typeof arr);

let int = 75;
//console.log(int.toString());

let str = "3435";
str = Number("3698");
str = Number(false);
str = Number([1, 2, 3, 4, 5, 6, 7, 8]);
//console.log(str, typeof str);

let num = parseFloat("34.098");
console.log(num.toFixed(2), typeof num);

// type coercion
let myStr = Number("398");
let myNum = 34;
console.log(myStr + myNum);
