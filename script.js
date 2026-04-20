class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  set species(value) {
    this._species = value;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("woof");
  }
}

window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;