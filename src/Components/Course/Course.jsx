import React, { useState } from 'react'
import './Course.css'
const Course = () => {
    const [cn,setCn]=useState('');
    const [dn,setDn]=useState('');
    const [amt,setAmt]=useState('');

    const readcoursename =(event) =>{
        setCn(event.target.value);
        console.log(event.target.value);
    }
    const readduration =(event) =>{
        setDn(event.target.value);
        console.log(event.target.value);
    }
    const readfeeamount =(event) =>{
        setAmt(event.target.value);
        console.log(event.target.value);
    }
    
  return (
    <div>
      <label for="cname"><b>Course name</b></label>
    <input type="text" placeholder='enter coursename' name="cname" required/> <br />
    <label for="dtn"><b>Duration</b></label>
    <input type="number" placeholder='enter duration'  name="dtn" required/> <br />
    <label for="famt"><b>Fee Amount</b></label>
    <input type="number" placeholder='enter amount'  name="famt" required/> <br />
    <button type="submit">Save</button>
    </div>
  )
}                   

export default Course
