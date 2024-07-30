import { useEffect, useState } from "react"
import Menu from "../componet/menu"
import { categoryList } from "../services/category"
import CategoryOption from "../componet/categoryoption"
import { toast } from "react-toastify"
import { addmyblogs } from "../services/blog"


function AddBlog(){

    const [title,setTitle]=useState('')
    const [category,setCategory]=useState(1)
    const [content,setContent]=useState('')
    const [options,setoption]=useState([])
    const id=sessionStorage.getItem('id')

    useEffect(()=>{
        onSelectCategory()
    },[])


    async function onAddBlog(){
        const result=await addmyblogs(title, content,id,category)

        if(result['status']=='success'){
            toast.success('blog is added')
        }
        else{
            toast.error('something went wrong')
        }
    }
    

    async function onSelectCategory(){
        const result=await categoryList()
        if(result['status']=='success'){
            setoption(result['data'])
        }
        else{
            toast.error('something went wrong')
        }
    }

    console.log(options)

    return(
        <div className="container-fluid">
            <h2 style={{textAlign:'center'}} className="mt-3">Add Blog</h2>
            <div className="row mt-5" >
                <div className="col"><Menu/></div>
                <div className="col form" style={{fontSize:'18px'}}>
                    <div className="mb-3 ">
                        <label htmlFor="">Title</label>
                        <input type="text" className="form-control" onChange={(e)=>{
                            setTitle(e.target.value)
                        }} />
                    </div>

                    <div className="mb-3 form-group">
                        <label htmlFor="">Category</label>
                        <select name="" id="" className="form-control" onChange={(e)=>{
                            setCategory(e.target.value)
                        }} >
                            <option  value="">Select categories</option>
                            {options.map((op)=>{
                               return <CategoryOption opt={op}/>
                            })}
                            

                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Content</label>
                        <textarea name="" id=""  rows="5" className="form-control" onChange={(e)=>{
                            setContent(e.target.value)
                        }}></textarea>
                    </div>
                    
                    <button className="btn btn-primary" onClick={onAddBlog}>Add Blog</button>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default AddBlog