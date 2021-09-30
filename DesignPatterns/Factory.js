class Apple {
    constructor() {
        this.proteins = 5;
        this.fats = 10;
        this.carbohydrates = 15;
    }
}

class Orange {
    constructor() {
        this.proteins = 15;
        this.fats = 10;
        this.carbohydrates = 25;
    }
}

class Pineapple {
    constructor() {
        this.proteins = 15;
        this.fats = 0;
        this.carbohydrates = 25;
    }
}

class FruitsFactory {
    create(type) {
        switch (type) {
            case 'apple':
                this.fruit = new Apple();
                return this.fruit;
            case 'orange':
                this.fruit = new Orange();
                return this.fruit;
            case 'pineapple':
                this.fruit = new Pineapple();
                return this.fruit;
            default:
                return new Error('Unknown type: ' + type);
        }
    }

    getFruitProteins() {
        return this.fruit.proteins;
    }
}

const factory = new FruitsFactory();

const apple = factory.create('apple');

apple.proteins;