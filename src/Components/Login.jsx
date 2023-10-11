import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    //variable declaration
    const [un,setUn] =useState('');
    const [pwd,setPwd] =useState('');
    const [error,setError] =useState(false);
   

    const readusername = (event) => {
       event.preventDefault(); //to not to refresh
        setUn(event.target.value);
        console.log(event.target.value);
    }
    const readpassword = (event) => {
      event.preventDefault(); //to not to refresh
        setPwd(event.target.value);
        console.log(event.target.value);
    }
    const checkfilldata =(event) =>{
      event.preventDefault(); //to not to refresh
      if(un.trim()===''||pwd.trim()==='')
      {
        setError(true);
        return;
      }
      else
      {
        // navigate("/Home");
      props.checkLogin(un,pwd);



      }
     
    }

    
    
  return ( 
    <div>
 <form >  

 <label for="uname"><b>Username</b></label>
    <input type="text" placeholder='enter username' onChange={readusername} name="uname" required/> <br />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder='enter password' name="psw" onChange={readpassword} required/> <br />

    <button type="submit" onClick={checkfilldata}>Login</button>
 </form>
  {error && 'Error occured'}
    
    </div>
  )
}

export default Login
