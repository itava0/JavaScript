//Reference type
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10};

object1 === object2; //True they both reference the same value in memory

object3 !== object1// they both have the same value but they are store in a different spot in memory

//Context vs Scope

const object4 = {
  a: function() {
    console.log(this);
  }
}

//Instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    console.log('player', this);
  }
  introduce() {
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
  }
}

 class Wizard extends Player {
   constructor(name, type, spell) {
     super(name, type);
     this.spell = spell;
     console.log('wizard', this)
   }
   Player() {
     console.log(`WEEEE I'm a ${this.type}, look at my spell ${this.spell}`);
   }
 }

 const wizard1 = new Wizard('Harry', 'Dark magic', 'Imperius Curse');

 const wizard2 = new Wizard('Sheyla', 'Healer', 'Legilimens');