class Person{
  constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age
  }
  set firstName(newFirstName){
    if (typeof newFirstName==="string"&&newFirstName.length>0) {
      this._firstName=newFirstName;
    }else{
      console.error("first name must be a non-empty string");
    }
  }
  set lastName(newLastName){
    if (typeof newLastName==="string"&&newLastName.length>0) {
      this._lastName=newLastName;
    }else{
      console.error("Last name must be a non-empty string");
    }
  }
  set age(newAge){
    if (typeof newAge==="number"&&newAge>=0) {
      this._age=newAge;
    }else{
      console.error("Age must be a non-negetive number");
    }
  }
  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get age(){
    return this._age;
  }
  get fullName(){
    return this._fullName + " " + this._lastName;
  }
}
const person =new Person("spongbob","squarepants",30);

console.table(`firstname: ${person.firstName} lastname: ${person.lastName},age: ${person.age}`);