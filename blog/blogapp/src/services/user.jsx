import axios from "axios";

export async function register(full_name,email,password,phone_no){
    const body={
        full_name,email,password,phone_no
    }
    const response=await axios.post(`http://localhost:4000/user/register`,body)

    return response.data
}

export async function login(email,password){
    const body={
        email,
        password,
    }
    const response=await axios.post(`http://localhost:4000/user/login`,body)

    return response.data
}


