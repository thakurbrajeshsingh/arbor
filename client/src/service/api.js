import axios from 'axios';

const url = 'http://localhost:8000/';


export const authenticatesignup = (user) => {
    try {
        return axios.post(`${url}signup`, user)
    } catch (error) {
        console.log("Error while Calling Sign Up Api")
    }
}


export const authenticatelogin = (user) =>{
    try {
        return axios.post(`${url}login`,user)
    } catch (error) {
        console.log("Error while Calling Api")
    }
} 


// export default authenticatesignup;