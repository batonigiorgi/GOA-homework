const car = {
  brand: "Mercedes",
  model: "Mercedes-Benz C-Class",
  year: 1999,
  startEngine: function(){console.log("Engine started")},
};

console.log(car.brand);
console.log(car.year);

car.color = "White";
car.year = 2017;

delete car.model;

car.startEngine();