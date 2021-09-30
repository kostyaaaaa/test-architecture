class User {
    constructor(name) {
        this.name = name;
    }

    notify(changes) {
        // console.log(`${changes} applied`);
    }
}

class Document {
    constructor() {
        this.users = [];
    }

    subscribe(user) {
        this.users.push(user);
    }

    addChanges(changes) {
        this.users.forEach(user => user.notify(changes));
    }
}

const Ivan = new User('Ivan');
const Konstantin = new User('Konstantin');

const doc1 = new Document();

doc1.subscribe(Ivan);
doc1.subscribe(Konstantin);

doc1.addChanges('hello world');
