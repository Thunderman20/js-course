const person={
  fullName:"whatever",
  age:30,
  isStudent:true,
  hobbies:["karate","jellyfishing","cooking"],
  address:{
    street:"124 conch st.",
    city:"kkkkk",
    country:"Int.Water",
  }
}

console.table(person);

for(const property in person.address){
  console.log(person.address[property]);
}

class Person{
  constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);

  }
}
class Address{
  constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
  }
}

const person1=new Person("jkf",30,"baharan9","dezful","iran");
const person2=new Person("fkg",37,"baharan8","dezful","iran");
const person3=new Person("sqw",37,"baharan7","dezful","iran");

console.table(person1);
console.log(person1.name);
console.log(person1.age);
console.log(person1.address);