import { useEffect, useState } from "react"
import Menu from "../componet/menu"
import { myblogs } from "../services/blog"
import { toast } from "react-toastify"
import Myblogitem from "../componet/myblogitem"

function Myblog(){

    const [blog,setBlog]=useState([])

    useEffect(()=>{
        onmyblog()
    },[])

    async function onmyblog(){
        const id= sessionStorage.getItem('id')
        const result=await myblogs(id)
        
        if(result['status']=='success'){
            setBlog(result['data'])
        }
        else {
            toast.error(result['error'])
        }
    }


    return(
        <div className="container-fluid">

            <h2 style={{textAlign:'center'}} className="mt-3">My Blogs</h2>

            <div className="row mt-5">

            <div className="col-2"><Menu/></div>

            <div className="col">
            <table className="table table-bordered table-striped table-info" style={{fontSize:"18px"}}>

                

                <thead className="">
                    <tr>
                        <td>Id</td>
                        <td >Blog Title</td>
                        <td>Category</td>
                        <td>Action</td>
                    </tr>
                        
                
                </thead>
                <tbody>
                   { blog.map((b)=>{
                    return <Myblogitem blogitem={b}/>
                    })}
                    
                </tbody>

            </table>
            </div>

            <div className="col-2"></div>

            </div>
        </div>
    )
}

export default Myblog