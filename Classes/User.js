// abstract class, used for inheritance
class User {
    constructor({ firstName, lastName, email, password }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    doRequest = (context) => {
        // mock request
        console.log(`${context} request started`)
    }

    login = () => {
        this.doRequest('login');
    }
 
    logout = () => {
        this.doRequest('logout');
    }
}

module.exports = User;