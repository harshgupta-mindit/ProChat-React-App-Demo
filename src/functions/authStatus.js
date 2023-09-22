import axios from "axios"


const BASE_URL = "https://fine-gray-snapper-tutu.cyclic.cloud";
// const BASE_URL = "http://localhost:8000";


// INPUT ==> object {email and password}
//OUTPUT ==> object {name, email, access token}
export const loginStatus = async (email, password) => {
    console.log("func :", email, password)
    const result = await axios.get(`${BASE_URL}/login`, {
        params: {
             email,
            password
        }
    })
    .then((data)=> {
        return {
            message: "success",
            data
        }
    })
    .catch((err)=> {
        return {
            message : "error",
            err
        }
    })
    return result;
}





// INPUT ==> object {name, email, password}
//OUTPUT ==> object {message, data}
export const signup = async (name, email, password) => {
    const result = axios.post(`${BASE_URL}/signup`, {
        name,
        email,
        password
    })
    .then((data)=> {
        return {
            message : "success",
            data
        }
    })
    .catch((err)=> {
        return {
            message : "error",
            err
        }
    })

    return result;
}