import { useEffect, useState } from "react";
import Menu from "../componet/menu";
import { categoryList } from "../services/category";
import CategoryLists from "../componet/categorylists";
import { toast } from "react-toastify";

function ShowCategory() {

    useEffect(()=>{
        oncategory()
    },[])
    const [category,setcategory]=useState([])
    async function oncategory(){
        const result=await categoryList()
        if(result['status']=='success'){
          setcategory(result['data'])
        }
        else{
          toast.error("some thing went wrong")
        }
    }

  return (
    <div className="container-fluid">
        <h2 style={{textAlign:'center'} } className="mt-3">Category</h2>

      <div className="row mt-5">
        <div className="col-2"><Menu/></div>
        <div className="col">

          <table className="table table-bordered table-striped table-info " style={{fontSize:"18px"}}>

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>

                </tr>
              
            </thead>
            <tbody>
                    {category.map((c)=>{
                        return <CategoryLists category={c}/>
                    })}
            </tbody>

          </table>

        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default ShowCategory;
