let a=1;
let b =2;

[a,b]=[b,a];

console.log(a);
console.log(b);

const colors =["red","green","blue","black","white"];
const[firstColor,secondColor,thirdColor,...extraColors] =colors;
console.table(firstColor);
console.table(secondColor);
console.table(thirdColor);
console.table(extraColors);
[colors[0],colors[4]]=[colors[4],colors[0]];

console.table(colors);

function displayPerson({firstName,lastName,age,job="none"}) {
  console.table(`name: ${firstName} ${lastName} age: ${age} job:${job}`);
}
const person1={
  firstName:"a",
  lastName:"b",
  age:30,
  job:"cook",
}
const person2={
  firstName:"c",
  lastName:"d",
  age:34,
  
}

const {firstName,lastName,age,job="none"}=person2;

console.table(person1);
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
displayPerson(person1);
displayPerson(person2);