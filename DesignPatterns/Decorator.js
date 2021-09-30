class Car {
    constructor() {
        this.speed = 0;
    }

    speed() {
        this.speed = this.speed + 20;
    }
}

class SpeedCar {
    constructor(car) {
        this.car = car;
    }

    speed() {
        this.car.speed = this.car.speed + 50;
    }
}

const car = new Car();
const speedCar = new SpeedCar(car);