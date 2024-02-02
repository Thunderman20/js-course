const person1 ={
  firstName:"hoo",
  lastName:"boo",
  age:30,
  isEmployed:true,
  sayhello:()=>{console.log(`${person1.firstName} says hello`)},
  eat:function(){console.log(`${this.firstName} eats ${this.lastName}`)},
}
const person2 ={
  firstName:"joo",
  lastName:"boo",
  age:30,
  isEmployed:true,
  sayhello:function(){console.log(`${person2.firstName} says hello`)},
  eat:function(){console.log(`${this.firstName} eats shit`)},
}
person1.sayhello()
person1.eat()
person2.sayhello()
person2.eat()