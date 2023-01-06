// Declaration

import axios from "axios";

class AuthService {

    constructor() {
        this.apiBaseUrl = 'http://localhost:3000';
    }

    login(loginObject) {

        // Make a request for a user with a given ID
        axios.post(this.apiBaseUrl + '/login', loginObject)
            .then(function (response) {
                // handle success
                console.log('login', response);
            })
            .catch(function (error) {
                // handle error
                console.log('login', error);
            })
            .then(function () {
                // always executed
            });
    }

    signup(signupObject) {

    }
}

export default AuthService;