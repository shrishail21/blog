import { Link } from "react-router-dom"
import { useState } from "react";
import { toast } from "react-toastify";
import { register } from "../services/user";
import { useNavigate } from "react-router-dom";

function Registration() {

    const navigate=useNavigate()

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')


   async function  onRegistration(){
    if(name.length==0){
        toast.warning('Enter name')
    }else if(email.length==0){
        toast.warning('Enter email')
    }else if(password.length==0){
        toast.warning('Enter password')
    }else if(phone.length==0){
        toast.warning('Enter phone')
    }else{
        const result=await register(name,email,password,phone)
        if(result['status']=='success'){
            toast.success('User is register')
            navigate('/login')
        }
        
    }


    }

  return (
    <div>
      <h2 className="mt-5" style={{ textAlign: "center" }}>
        Registration
      </h2>

      <div className="row">
        <div className="col"></div>
        <div className="col">
            <div className="mb-3">
            <label htmlFor="">Name</label>
            <input type="text" className="form-control" onChange={(e)=>{
                console.log(e.target.value)
                setName(e.target.value)
            }} />
            </div>

            <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="email" className="form-control" onChange={(e)=>{
                setEmail(e.target.value)
            }} />
            </div>

            <div className="mb-3">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" onChange={(e)=>{
                setPassword(e.target.value)
            }} />
            </div>

            <div className="mb-3">
            <label htmlFor="">Phone</label>
            <input type="text" className="form-control" onChange={(e)=>{
                setPhone(e.target.value)
            }} />

            <div className="mt-3 mb-3">Already register then go for <Link to='/login'>Login</Link> </div>

            <button className="btn btn-primary " onClick={onRegistration}>Registration</button>
            </div>
            
        </div>
        <div className="col"></div>
      </div>
      
    </div>
  );
}

export default Registration;