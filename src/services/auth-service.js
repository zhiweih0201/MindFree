import axios from "axios";

class AuthService {

    constructor() {
        this.apiBaseUrl = 'http://localhost:3000';

    }


    login(loginObject) {
        // Make a request for a user with a given ID
        return axios.post(this.apiBaseUrl + '/login', loginObject)
    }

    signup(signupObject) {
        // Make a request for a user with a given ID
      return  axios.post(this.apiBaseUrl + '/signup', signupObject)

    }
}

export default AuthService;