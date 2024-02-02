const nums=[1,2,3,4,5,6];
const  evenNums=nums.filter((x)=>x % 2 ===0);
const squares=nums.map((x)=>  Math.pow(x,2));
const cubes=nums.map((x)=>  Math.pow(x,3));


console.log(nums);
console.log(`evens are :${evenNums}`);
console.log(`squares are :${squares}`);
console.log(`cubes are :${cubes}`);