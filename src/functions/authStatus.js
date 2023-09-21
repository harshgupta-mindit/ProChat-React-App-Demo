import axios from "axios"


// INPUT ==> object {email and password}
//OUTPUT ==> object {name, email, access token}
export const loginStatus = async (email, password) => {
    console.log("func :", email, password)
    const result = await axios.get("http://localhost:8000/login", {
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
export const signup = async ({name, email, password}) => {
    const result = axios.post("http://localhost:8000/signup", {
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