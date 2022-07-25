let name1 = prompt("What is the first name?")
let name2 = prompt("What is the second name?")
let name3 = prompt("What is the third name?")

let num1 = name1.length
let num2 = name2.length
let num3 = name3.length

if (num1 > num2 && num1 > num3){
    console.log("${name1} has the longest name.");
}
else if (num2 > num3 && num2 > num1){
console.log("${name2} has the longest name.");
}
else if (num3 > num1 && num3 > num2){
    console.log("${name3} has the longest name.");
}
else if (num1 === num2 && num1 > num3){
    console.log("${name1} and ${name2} tie for the longest name.");
}
else if (num1 === num3 && num1 > num2){
    console.log("${name1} and ${name3} tie for the longest name.");
}
else if (num2 === num3 && num2 > num1){
    console.log("${name2} and ${name3} tie for the longest name.");
}
else {
    console.log("All three names are the same length.");
}