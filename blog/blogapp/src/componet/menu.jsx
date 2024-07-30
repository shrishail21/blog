import { Link } from "react-router-dom"
import { toast } from "react-toastify";
function Menu() {

    function logout(){
        sessionStorage.removeItem('id')
        toast.success('You logged out')
    }

    return (
        
        <div className="container">
<div className="d-flex align-items-start">

  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><Link to='/myblog'> MY BLOGS </Link></button>
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">ALL BLOGS</button>
    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><Link to='/addcategory'>ADD CATEGORY</Link> </button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"> <Link to='/showcategory'>SHOW CATEGORY</Link> </button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"> <Link to='/addblog'>ADD BLOG</Link> </button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">SHOW BLOGS</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={logout}> <Link to='/login'>LOGOUT</Link> </button>
    

  </div>
 
</div>

      </div>
      
    );
  }

  export default Menu;