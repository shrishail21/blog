import React, { useEffect, useState } from 'react'
import { getBlog } from '../services/blog'
import { toast } from 'react-toastify'
import BlogItem from '../componet/blogitem'

 function Readblog() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id')
    

    useEffect(()=>{
        ondisplayblog()
    },[])

    const[blog,setblog]=useState([])

    async function ondisplayblog(){
        const result =await getBlog(id)
        if (result['status'] === 'success') {
            setblog(result['data'])
          } else {
            toast.error(result['error'])
          }
    }

  return (
    <>
        <div>
        { blog.map((b)=>{
                    return <BlogItem blogs={b}/>
        })}
        </div>
    </>
  )
}
export default Readblog