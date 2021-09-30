class Hammer {
    knock() {

    }
}

class HammerAdapter {
    constructor(hammer) {
        this.hammer = hammer;
    }

    use() {
        this.hammer.knock();
    }
}

class Worker {
    constructor(name, tool) {
        this.name = name;
        this.tool = tool;
    }

    work() {
        this.tool.use();
    }
}

const hammer = new Hammer();
const tool = new HammerAdapter(hammer);
const Ivan = new Worker('Ivan', tool);

Ivan.work();

// the adapter is used to adapt the hammer class to the worker class
