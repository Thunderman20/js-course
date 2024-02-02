class MathUtil{
  static PI=3.14159;

  static getDiameter(radius){
    return radius * 2;
  }
  static getCircumference(radius){
    return 2 * this.PI * radius;
  }
  static getArea(radius){
    return  this.PI * radius * radius;
  }
}
console.log(`Pi :${MathUtil.PI}`);
console.log(`Diameter: ${MathUtil.getDiameter(10)}`);
console.log(`Circumference: ${MathUtil.getCircumference(10)}`);
console.log(`Area: ${MathUtil.getArea(10)}`);


class User{
  static userCount=0;

  constructor(username){
    this.username=username;
    User.userCount++;
  }
  static getUserCount(){
    
    console.log(`There Are: ${User.userCount} users`);
  }
  sayHello(){
    console.log(`Hello my username is : ${this.username}`);
  }
}

const user1 = new User("spongbob");
const user2 = new User("Patrick");
const user3 = new User("sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);
User.getUserCount();

user1.sayHello();
user2.sayHello();
user3.sayHello();