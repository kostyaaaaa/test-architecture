const MarketPlace = require('./MarketPlace');

// abstract class, used for inheritance
class User {
    constructor({ firstName, lastName, email, password }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.marketPlace = MarketPlace; // composition
        this.id = Math.random().toString();
    }

    doRequest = (context) => {
        // mock request
        console.log(`[User] ${this.firstName} ${context}`)
    }

    login = () => {
        this.doRequest('login');
    }
 
    logout = () => {
        this.doRequest('logout\n');
    }
}

module.exports = User;