
import './App.css';
import Login from './pages/login';
import {Routes ,Route } from 'react-router-dom';
import Registration from './pages/registration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetail from './pages/blogDetail';
import Myblog from './pages/myblog';
import AddBlog from './pages/addblog';
import "bootstrap-icons/font/bootstrap-icons.css";
import AddCategory from './pages/addcategory';
import ShowCategory from './pages/showcategory';
import Readblog from './pages/Readblog';


function App() {
  return (
    <div className="Container">
      <Routes>

        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/blogdetail' element={<BlogDetail/>}></Route>
        <Route path='/myblog' element={<Myblog/>}></Route>
        <Route path='/addblog' element={<AddBlog/>}></Route>
        <Route path='/addcategory' element={<AddCategory/>}></Route>
        <Route path='/showcategory' element={<ShowCategory/>}></Route>
        <Route path='/readblog/?id=?' element={<Readblog/>}></Route>
        


      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
