import React from 'react'
import './Transferdata.css'
const Transferdata = (props) => {
  return (
    <div>
     <h1 className='aa'>welcome </h1>
    <p>
        Username:&nbsp;&nbsp;  {props.username} <br />
        Password: &nbsp;&nbsp;  {props.password} <br />
       Usertype:&nbsp;&nbsp; {props.usertype}
    </p>


    </div>
  )
}

export default Transferdata


