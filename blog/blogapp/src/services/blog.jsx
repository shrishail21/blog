import axios from "axios";

export async function myblogdetail(id){
    const body={
        id
    }
    const response=await axios.post(`http://localhost:4000/blogs/showblog`,body)

    return response.data
}

export async function myblogs(id){
    const body={
        id
    }
    const response=await axios.post(`http://localhost:4000/blogs/myblog`,body)

    return response.data
}

export async function addmyblogs(title, contents,user_id,category_id){
    const body={
        title, 
        contents,
        user_id,
        category_id
    }
    console.log(body)
    const response=await axios.post(`http://localhost:4000/blogs/addblog`,body)

    return response.data
}

export async function getBlog(id){
    
    const response=await axios.get(`http://localhost:4000/blogs/${id}`)
    
    return response.data
}

