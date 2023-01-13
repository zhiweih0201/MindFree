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
                console.log('login success', response);
                

            })
            .catch(function (error) {
                // handle error
                console.log('login error', error);
            })


    }

    signup(signupObject) {
        // Make a request for a user with a given ID
        axios.post(this.apiBaseUrl + '/signup', signupObject)
            .then(function (response) {
                // handle success
                console.log('signup', response);
            })
            .catch(function (error) {
                // handle error
                console.log('signup', error);
            })
            .then(function () {
                // always executed
            });
    }
}

export default AuthService;