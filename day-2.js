// File: objectMethods.js

console.log("Object Methods Exercise");

// Example 1: Adding Methods to a Book Object
const book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281,
  read() {
    console.log(`${this.title} by ${this.author} has been read.`);
  },
  updatePages(newPages) {
    this.pages = newPages;
  }
};

console.log("Example 1: Book Object with Methods");
book.read();           // Output: To Kill a Mockingbird by Harper Lee has been read.
console.log(book.pages); // Output: 281
book.updatePages(300);
console.log(book.pages); // Output: 300

// TODO 1: Add a method to `movie` object
// Add a method named `watch` that logs a message: "You watched {movie.title}."
// Add another method named `updateYear` that updates the `year` property.
// Use `this` to access and modify the properties.
const movie = {
  title: 'Despicable Me 4',
  director: 'Chris Renaud and Patrick Delage',
  leading: 'Steve Carell',
  year: 2024,

  watch: function () {
    console.log(`${this.title} directed by ${this.director}, starring ${this.leading} made in ${this.year} has been watched and is very funny!`);
  },

  updateMovie: function (newYear) {
    this.year = newYear;
  }
};

console.log(movie.title);
console.log(movie.year);
movie.watch();
movie.updateMovie(2024);
console.log(movie.year);

// Example 2: Adding Methods to a Pet Object
const pet = {
  name: 'Whiskers',
  species: 'Cat',
  age: 5,
  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
  },
  rename(newName) {
    this.name = newName;
  }
};

console.log("\nExample 2: Pet Object with Methods");
pet.celebrateBirthday(); // Output: Happy Birthday Whiskers! You are now 6 years old.
pet.rename('Paws');
console.log(pet.name);  // Output: Paws

// TODO 2: Add a method to `city` object
// Add a method named `addPopulation` that increases the `population` property by a given number.
// Add another method named `rename` that updates the `name` property using `this`.
const city = {
  name: 'Baton Rouge',
  population: 450544, // Changed to a number
  country: 'USA',
  parish: 'East Baton Rouge Parish',
  year: 1894,

  status: function () {
    console.log(`${this.city} has ${this.population} people in it.`)
  },
  addPopulation: function () {
    this.population += 2000;
    console.log(`${this.name} in 2022 had a population of 450,544. Looking at trends, it may increase by ${this.population}.`);
  },
  rename: function (newName) {
    this.name = newName;
    console.log(`Baton Rouge is French for ${this.name}.`);
  }
};
city.status();
city.addPopulation();
city.status();
city.rename('Red Stick');
console.log(city.name);


// Example 3: Adding Methods to a Car Object
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2021,
  drive() {
    console.log(`Driving a ${this.brand} ${this.model} (${this.year}).`);
  },
  updateYear(newYear) {
    this.year = newYear;
  }
};

console.log("\nExample 3: Car Object with Methods");
car.drive();        // Output: Driving a Toyota Corolla (2021).
car.updateYear(2023);
console.log(car.year); // Output: 2023

// TODO 3: Add a method to `computer` object
// Add a method named `upgradeRAM` that updates the `ram` property.
// Add another method named `describe` that logs a message with the `brand`, `processor`, and `ram` properties.
const computer = {
  brand: 'Apple iMac',
  processor: 'Apple M3 Chip',
  ram: 8,
  status: function () {
    console.log(`${this.brand} has ${this.processor} with ${this.ram}.`)
  },
  Mac(){
    console.log(`${this.brand} ${this.processor} and ${this.ram} is the latest model of iMac`);
  },
  upgradeRam: function(addedRam){
    this.ram = addedRam;
  }

};
computer.status();
computer.upgradeRam(16);
computer.status();
computer.Mac();
console.log(computer.processor);

// Example 4: Adding Methods to a Product Object
const product = {
  name: 'Laptop',
  price: 999.99,
  inStock: true,
  applyDiscount(discount) {
    this.price -= discount;
    console.log(`Discount applied! New price is $${this.price}.`);
  },
  updateStock(status) {
    this.inStock = status;
  }
};

console.log("\nExample 4: Product Object with Methods");
product.applyDiscount(100); // Output: Discount applied! New price is $899.99.
console.log(product.price);  // Output: 899.99
product.updateStock(false);
console.log(product.inStock); // Output: false

// TODO 4: Add a method to `restaurant` object
// Add a method named `changeRating` that updates the `rating` property.
// Add another method named `reopen` that sets the `inStock` property to true.


// Example 5: Adding Methods to a Student Object
const student = {
  firstName: 'John',
  lastName: 'Doe',
  grade: 'A',
  updateGrade(newGrade) {
    this.grade = newGrade;
    console.log(`${this.firstName} ${this.lastName} is now in grade ${this.grade}.`);
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log("\nExample 5: Student Object with Methods");
student.updateGrade('B');  // Output: John Doe is now in grade B.
console.log(student.fullName()); // Output: John Doe

// TODO 5: Add a method to `house` object
// Add a method named `renovate` that increases the `size` property by a given number.
// Add another method named `changeAddress` that updates the `address` property.

