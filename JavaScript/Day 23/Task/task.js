// Task 1: Car and ElectricCar classes

// Car class
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
      return "The car has started.";
    }
  }
  
  // ElectricCar class inheriting from Car
  class ElectricCar extends Car {
    constructor(make, model, year, batteryLevel) {
      super(make, model, year); // Calls the parent class constructor
      this.batteryLevel = batteryLevel;
    }
  
    charge() {
      return "The car is charging.";
    }
  }
  
  // Example usage:
  const myCar = new Car("Toyota", "Corolla", 2020);
  console.log(myCar.start()); // Output: The car has started.
  
  const myElectricCar = new ElectricCar("Tesla", "Model S", 2022, 85);
  console.log(myElectricCar.start()); // Output: The car has started.
  console.log(myElectricCar.charge()); // Output: The car is charging.
  

//   Task 2: Rectangle and Square classes

// Rectangle class
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  // Square class inheriting from Rectangle
  class Square extends Rectangle {
    constructor(sideLength) {
      super(sideLength, sideLength); // Calls the parent class constructor
    }
  
    // Optionally, overriding the area method to make it more specific for a square
    area() {
      return this.width * this.width; // Can also use sideLength * sideLength
    }
  }
  
  // Example usage:
  const myRectangle = new Rectangle(4, 5);
  console.log(myRectangle.area()); // Output: 20
  
  const mySquare = new Square(4);
  console.log(mySquare.area()); // Output: 16
  