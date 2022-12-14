const maximumFitness = 10;
const increaseFitnessWalk = 4;
const minimumHunger = 0;
const decreaseHunger = 3;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = maximumFitness;
  death = () => {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive");
    }
  };
}

// const parent = new Pet("dave") {
//   adoptChild = funtion() {

//   }
// };
// Need a function called adoptChild which creates a new instance of child on the parent.

//haveBabay(childsName )

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};

Pet.prototype.growUp = function () {
  death();
  this.age += 1;
  this.fitness -= 3;
  this.hunger += 5;
};

Pet.prototype.walk = function () {
  death();
  if (this.fitness + increaseFitnessWalk <= maximumFitness) {
    this.fitness += increaseFitnessWalk;
  } else {
    this.fitness = maximumFitness;
  }
};

Pet.prototype.feed = function () {
  death();
  //   this.hunger - 3;
  if (this.hunger - decreaseHunger >= minimumHunger) {
    this.hunger -= decreaseHunger;
  } else {
    this.hunger = minimumHunger;
  }
};

Pet.prototype.checkUp = function () {
  death();
  if (this.fitness <= 3 && this.hunger >= 5) {
    return "I am hungry AND i need a walk";
  } else if (this.fitness <= 3) {
    return "I need a walk";
  } else if (this.hunger >= 5) {
    return "I am hungry";
  } else {
    return "I feel great";
  }
};

module.exports = Pet;
