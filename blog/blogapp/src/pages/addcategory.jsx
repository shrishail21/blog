import { useState } from "react"
import Menu from "../componet/menu"
import { addcategories } from "../services/category"
import { toast } from "react-toastify"

function AddCategory(){

    const [title,setTitle]=useState('')
    const [detail,setDetail]=useState('')

    async function onaddcategory(){
        const result= await addcategories(title,detail)
        console.log(result)
        if(result['status']=='success'){
            toast.success('category is add')
        }
        else{
            toast.error('some thing went wrong')
        }
    }

    return(
        <div className="container-fluid">

            <h2 style={{textAlign:'center'}} className="mt-3">Add Category</h2>

            <div className="row mt-5">

                <div className="col">
                    <Menu/>
                </div>
                <div className="col " style={{fontSize:'18px'}}>

                    <div className="mb-3" >
                        <label htmlFor="">Title</label>
                        <input type="text" className="form-control" onChange={(e)=>{
                            setTitle(e.target.value)
                        }}/>
                    </div>

                    <div className="mb-3 " >
                        <label htmlFor="">Detail</label>
                        <input type="text" className="form-control" onChange={(e)=>{
                            setDetail(e.target.value)
                        }} />
                    </div>
                    
                    <button className="btn btn-primary mt-3" onClick={onaddcategory}>ADD</button>
                </div>
                <div className="col"></div>

            </div>

        </div>
    )
}

export default AddCategory