class Animal{
  alive=true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }
  sleep(){
    
    console.log(`This ${this.name} is sleeping`);
  }
}
class Rabit extends Animal{
  name="Rabit";
  run(){
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal{
  name="Fish";
  swim(){
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal{
  name="hawk";
  fly(){
    console.log(`This ${this.name} is Flying`);
  }
}
const rabit =new Rabit();
const fish =new Fish();
const hawk =new Hawk();



console.log(rabit.alive);

rabit.eat();
rabit.sleep();
rabit.run();
console.log(fish.alive);

fish.eat();
fish.sleep();
fish.swim();
console.log(hawk.alive);

hawk.eat();
hawk.sleep();
hawk.fly();