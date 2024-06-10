import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const[email,setEmail]=useState('')
  const [password, setPassword] = useState('');
  const[errors,setErrors]=useState({});
  const[submitted,setSubmitted]=useState(false)
  


  const validateForm=()=>{
    let isValid=true;
    const newErrors={}

    if(!email){
      newErrors.email="Email is Required"
      isValid=false;
    }

    if(!password){
      newErrors.password="Password is Required"
      isValid=false;

    }

    const regex=new RegExp("^(?=.*[a-zA-Z])(?=.*\d).{4,}$")

    if(password && regex.test(password)===false) {
      newErrors.password="Minimum four characters, at least one letter and one number is required"
      isValid=false;
    }
    setErrors(newErrors)
    return isValid;
  }

  
  const handleSubmit=(e)=>{
    e.preventDefault();

    if (validateForm()){
      console.log("Form data:",email,password)
      setSubmitted(true);
    } else{

    }
    
  }



  return (
    <div>
      <div className='container'>
      <form className='form-container' onSubmit={handleSubmit}> 
        <h1>Login</h1>
        <div className='input-btn'>
        <input type='email' placeholder='Email'  id='name' className='btn-user' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        {errors.email && <div className="error">{errors.email}</div>}
        <input type='password' placeholder='Password' className='btn-user' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <input type='checkbox' ></input>
        <label>Remember Me</label>
        <Link to="/forgot-password">Forgot Password?</Link>
       <button className='btn' >Login</button>
       <p>Dont have an account?</p>
       <Link to="/create-account">Create an Account</Link>
       </form>
       </div>
    </div>
  )
}

export default Login