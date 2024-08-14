// File: objectPractice.js

console.log("Object Practice Exercise");

// Example 1: Creating a Basic Object
const book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281
};

console.log("Example 1: Basic Object");
console.log(book.title);  // Output: To Kill a Mockingbird
console.log(book.author); // Output: Harper Lee
console.log(book.pages);  // Output: 281

// TODO 1: Create a `movie` object
// Create an object named `movie` with the following properties:
// `title` (string), `director` (string), `year` (number)
// Log each property using dot notation.
const movie = {
  title: 'Despicable Me 4',
  director: 'Chris Renaud and Patrick Delage',
  leading: 'Steve Carell',
  year: 2024
};

console.log(movie.title);
console.log(movie.director);
console.log(movie.leading);
console.log(movie.year);
// Example 2: Creating a Pet Object
const pet = {
  name: 'Whiskers',
  species: 'Cat',
  age: 5
};

console.log("\nExample 2: Pet Object");
console.log(pet.name);    // Output: Whiskers
console.log(pet.species); // Output: Cat
console.log(pet.age);     // Output: 5

// TODO 2: Create a `city` object
// Create an object named `city` with the following properties:
// `name` (string), `population` (number), `country` (string)
// Log each property using dot notation.
const city = {
  name: 'Baton Rouge',
  population: '450,544',
  country: 'USA', 
  parish: 'East Baton Rouge Parish',
  year: 1894
};

console.log(city.name);
console.log(city.meaning);
console.log(city.water);
console.log(city.parish);
console.log(city.year);

// Example 3: Creating a Car Object
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2021
};

console.log("\nExample 3: Car Object");
console.log(car.brand);  // Output: Toyota
console.log(car.model);  // Output: Corolla
console.log(car.year);   // Output: 2021

// TODO 3: Create a `computer` object
// Create an object named `computer` with the following properties:
// `brand` (string), `processor` (string), `ram` (number)
// Log each property using dot notation.
const computer = {
  brand: 'Apple iMac',
  processor: 'Apple M3 Chip',
  ram: 8 
};

console.log(computer.brand);
console.log(computer.processor);
console.log(computer.ram);
// Example 4: Creating a Product Object
const product = {
  name: 'Laptop',
  price: 999.99,
  inStock: true
};

console.log("\nExample 4: Product Object");
console.log(product.name);    // Output: Laptop
console.log(product.price);   // Output: 999.99
console.log(product.inStock); // Output: true

// TODO 4: Create a `restaurant` object
// Create an object named `restaurant` with the following properties:
// `name` (string), `type` (string), `rating` (number)
// Log each property using dot notation.
const restaurant ={
  name: 'Chipotle',
  type: 'fast-casual',
  rating: 4.1
};

console.log(restaurant.name);
console.log(restaurant.type);
console.log(restaurant.rating);

// Example 5: Creating a Student Object
const student = {
  firstName: 'John',
  lastName: 'Doe',
  grade: 'A'
};

console.log("\nExample 5: Student Object");
console.log(student.firstName); // Output: John
console.log(student.lastName);  // Output: Doe
console.log(student.grade);     // Output: A

// TODO 5: Create a `house` object
// Create an object named `house` with the following properties:
// `address` (string), `size` (number), `hasGarage` (boolean)
// Log each property using dot notation.

const house = {
  address: '57384 Mount Pleasant Road, Bougalusa, LA 70427',
  size: '1500',
  hasGarage: true
};

console.log(house.address);
console.log(house.size);
console.log(house.hasGarage);