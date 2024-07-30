import { useEffect } from "react"
import { myblogdetail } from "../services/blog"
import BlogItem from "../componet/blogitem"
import { useState } from "react"
import { toast } from "react-toastify"
import Menu from "../componet/menu"

function BlogDetail(){

    useEffect(()=>{
        onmyblog()
    },[])
    const [blogs, setblogs] = useState([])
    async function onmyblog(){
        const id=sessionStorage.getItem('id')
        const result=await myblogdetail(id)
        
        if (result['status'] === 'success') {
            setblogs(result['data'])
          } else {
            toast.error(result['error'])
          }

        console.log(blogs)
    }

return(
    <div>
        <h2 style={{textAlign:'center'}}>My Blog</h2>

        <div className="row">
            <div className="col-2 ">
                <Menu/>
            </div>
            <div className="col mt-5 ">
            {blogs.map((blog) => {
            return <BlogItem blogs={blog} />
            })}
            </div>
            <div className="col-2"></div>
        </div>
        


    </div>
)
}

export default BlogDetail