import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";


function Myblogitem({blogitem}){

 

    return(
        <>
        
        <tr >
            <td>{blogitem.id}</td>
            
            <td><Link to={`/readblog/?id=${blogitem.id}`}>{blogitem.blogTitle}</Link></td>
            <td>{blogitem.categoryTitle}</td>
            <td>
                <span className="ms-2 me-4"><i class="bi bi-pencil-square"></i></span>
                <span className="ms-2"><i class="bi bi-trash3-fill" ></i></span>
            </td>
        </tr>
        </>
    )
}

export default Myblogitem