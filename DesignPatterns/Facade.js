class CoffeeMachine {
    grindCoffeeBeans() {
        // grind coffee beans
    }

    toBoilWater() {
        // to boil water
    }

    addMilk() {
        // add milk
    }
}

class CoffeeMachineFacade {
    constructor(coffeeMachine) {
        this.coffeeMachine = coffeeMachine;
    }

    prepareCoffee() {
        this.coffeeMachine.toBoilWater();
        this.coffeeMachine.grindCoffeeBeans();
        this.coffeeMachine.addMilk();
    }
}

const coffeeMachine = new CoffeeMachineFacade(new CoffeeMachine());

coffeeMachine.prepareCoffee();