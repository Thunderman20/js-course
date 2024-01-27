const nums=[1,2,3,4,5,6];

const max=nums.reduce(getMax);
const min=nums.reduce(getMin);
const squares=nums.map(function (x) {
  return Math.pow(x,2);
});
const cubes =nums.map((x)=>{
  return Math.pow(x,3);
});
const  evenNums=nums.filter((x)=>{
  return x % 2 ===0;
});
const  oddNums=nums.filter((x)=>{
  return x % 2 !==0;
});
const  total=nums.reduce((x,y)=>{
  return x+y;
});

console.log(nums);
console.log(`squares are :${squares}`);
console.log(`cubes are :${cubes}`);
console.log(`evens are :${evenNums}`);
console.log(`odds are :${oddNums}`);
console.log(`total is :${total}`);
console.log(`max is :${max}`);
console.log(`min is :${min}`);

function getMax(x,y) {
  return Math.max(x,y);
}
function getMin(x,y) {
  return Math.min(x,y);
}