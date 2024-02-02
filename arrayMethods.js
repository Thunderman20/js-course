const fruits=[{name:"apple",color:"red",calories:95},
              {name:"orange",color:"orange",calories:45},
              {name:"banana",color:"yellow",calories:105},
              {name:"coconut",color:"white",calories:159},
              {name:"pineapple",color:"yellow",calories:37}];


console.log(fruits[0].name);
console.table(fruits[0]);

console.table(fruits.concat([0]));

fruits.push({name:"grapes",color:"purple",calories:62});

console.table(fruits.concat([0]));
fruits.pop({name:"grapes",color:"purple",calories:62});

console.table(fruits.concat([0]));

fruits.forEach(fruit => {console.table(fruit.name,fruit.calories)});

const fruitNames = fruits.map(fruit =>fruit.name);
const fruitColor = fruits.map(fruit =>fruit.color);
const fruitCalories = fruits.map(fruit =>fruit.calories);

const yellowFruits= fruits.filter(fruit=>fruit.color==="yellow");
const lowCalFruits= fruits.filter(fruit=>fruit.calories<100);
const highCalFruits= fruits.filter(fruit=>fruit.calories>100);
const maxFruits= fruits.reduce((max,fruit)=>fruit.calories>max.calories?fruit:max);
const minFruits= fruits.reduce((min,fruit)=>fruit.calories<min.calories?fruit:min);
const nums =[1,10,2,9,3,8,4,7,5,6];
console.table(yellowFruits);
console.table(lowCalFruits);
console.table(highCalFruits);
console.table(maxFruits);
console.table(minFruits);
console.table(fruitNames);
console.table(fruitNames.sort());
console.table(nums.sort((a,b)=>a-b));
console.table(nums.sort((a,b)=>b-a));

  const people=[{name:"a",age:10,grade:3.0},
                {name:"b",age:21,grade:1.5},
                {name:"c",age:13,grade:2.5},
                {name:"d",age:42,grade:4.0}];

console.table(people.sort((a,b)=>a.age-b.age));
console.table(people.sort((a,b)=>a.grade-b.grade));
console.table(people.sort((a,b)=>a.name-b.name));
console.table(people.sort((a,b)=>a.name.localeCompare(b.name)));