import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Productsview = () => {
    const[viewd,setViewdata]=useState([]);
    const readproductdata=(event) =>{
    fetch("https://product-2b99d-default-rtdb.firebaseio.com//Product.json").
    then((Response)=>{
        return Response.json()
    }).then((data) =>{
        console.log(data);
        console.log(snapshotToArray(data));
        setViewdata(snapshotToArray(data));
    }) 
    
       
}  
   
function snapshotToArray(snapshot){
    const array =[];
    Object.keys(snapshot).forEach((key)=>{
        array.push(snapshot[key]);
    })
    return array;
}
  return (
    <div>
        <h1>Product List</h1>
        <Link to={"http://localhost:3000/Products"}> <Button variant='contained' type='submit'>
        Add</Button></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
       <Button variant='contained' type='submit' onClick={readproductdata}>Reload</Button>
      <br></br>
      <p></p>
      <table border="1" align='center'>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Mfd</th>
            <th>Product Exp</th>
             </tr> 
{viewd.map((value,index)=>{
    return(
        <tr key={index}>
            <td>{value.productid}</td>
            <td>{value.productname}</td>
            <td>{value.productcategory}</td>
            <td>{value.productmfd}</td>
            <td>{value.productexp}</td>
        </tr>
    )
})}

      </table>
    </div>
  )
}

export default Productsview
