console.log("This is tutorial 8");

const age = 20;
const doesDrive = true;
// const vari = 34;
// if (age != 19) {
//   console.log("Age is not 19");
// } else if (age !== 65) {
//   // = = = triplr equal check value as wel as type also
//   console.log("Age is not 65");
// } else {
//   console.log("Age is not correct");
// }

// if (typeof vari !== "undefined") {
//   console.log("Vari is defined");
// } else {
//   console.log("Vari is not defined");
// }
// if (doesDrive && age > 18) {
//   console.log("you can drive");
// } else {
//   console.log("you can not drive");
// }

//console.log(age == 45 ? "Age is 45" : "Age is not 45");
switch (age) {
  case 18:
    console.log("You are 18 years old");
    break;
  case 20:
    console.log("You are 20 years old");
    break;
  case 21:
    console.log("You are 21 years old");
    break;
  case 24:
    console.log("You are 24 years old");
    break;
  default:
    console.log("You are under 18 years old");
    break;
}
