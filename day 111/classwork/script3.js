class Car {
    constructor(speed, type) {
        this.speed = speed;
        this.type = type;
    }
    startEngine(){
        console.log("engine on");
    }
    stopEngine(){
        console.log("engine off");
    }
}
class ElectricCar extends Car{
    constructor(speed, type) {
        super(speed, type)
    }
    startEngine(){
        super.startEngine();
        console.log(this.speed)
    }
    stopEngine(){
        console.log(this.type)
    }
}
  