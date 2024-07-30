import axios from "axios";

export async function categoryList(){
    const response = await axios.get('http://localhost:4000/category/categoryList')

    return response.data
}

export async function addcategories(title,description){
    const body={
        title,description
    }
    const response=await axios.post(`http://localhost:4000/category/addcategories`,body)

    return response.data
}