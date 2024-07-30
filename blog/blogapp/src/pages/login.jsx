
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login } from "../services/user"



function Login(){

    const navigate=useNavigate()

  const  [email,setEmail]=useState('')
  const  [password,setPassword]=useState('')

async function onlogin(){
    if(email.length==0){
        toast.warning('Enter email')
    }
    else if(password.length==0){
        toast.warning('Enter password')
    }
    else{
        const result=await login(email,password)
        if(result['status']=='success'){
            toast.success(`${result['data']['full_name']} is logged-in`)
            navigate('/myblog')
            sessionStorage.setItem('id',result['data']['id'])
        }
        else{
            toast.error('Invalid user')
            
        }
    }
  }

    
    return(
        <div className="container">

            <h2 className="mt-5" style={{textAlign:'center'}}>Login</h2>


            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input type="email" className='form-control' onChange={(e)=>{
                                setEmail(e.target.value)
                            }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Password</label>
                            <input type="password" className='form-control' onChange={(e)=>{
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <button className="btn btn-primary  " onClick={onlogin}>Sign-in</button>
                        <Link to='/registration'><button className="btn btn-primary ms-3">Sign-up</button></Link>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}

export default Login