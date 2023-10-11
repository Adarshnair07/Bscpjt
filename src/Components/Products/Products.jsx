import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link, useHref } from 'react-router-dom';

const Products = () => {
    const [bn,setBn]=useState('');
    const [an,setAn]=useState('');
    const [pb,setPb]=useState(''); 
    const [pm,setPm]=useState('');
    const [pe,setPe]=useState('');
    const [error,setError]=useState(false); 
    const readproductid =(event) =>{
        event.preventDefault();
        setBn(event.target.value);
        console.log(event.target.value);
    }
    const readproductname =(event) =>{
        event.preventDefault();
        setAn(event.target.value);
        console.log(event.target.value);
    }
    const readproductcategory =(event) =>{
        event.preventDefault();
        setPb(event.target.value);
        console.log(event.target.value);
    }
    const readproductmfd =(event) =>{
        event.preventDefault();
        setPm(event.target.value);
        console.log(event.target.value);
    }
    const readproductexp =(event) =>{
        event.preventDefault();
        setPe(event.target.value);
        console.log(event.target.value);
    }
    const checkfilldata =(event) =>{
        event.preventDefault(); //to not to refresh
        if(bn.trim()===''||an.trim()===''||pb.trim()===''||pm.trim()===''||pe.trim()==='')
        {
          setError(true);
          return;
        }
        else
        {
            const myobj={
                productid:bn,
                productname:an,
                productcategory:pb,
                productmfd:pm,
                productexp:pe
            }
            
            
            fetch("https://product-2b99d-default-rtdb.firebaseio.com//Product.json",
            {
                method:"POST",
                body:JSON.stringify(myobj),
                headers:{"Content-Type":"application/json",
            }
            }
            );
            alert("Record saved")
        }
    }



  return (
    <div>
        <h1>Product Details</h1>
           <form>
           <TextField id="Standard" label="Product ID" variant="standard" input type="text" onChange={readproductid} /><br></br><br></br>
           <TextField id="Standard" label="Product Name" variant="standard" input type="text" onChange={readproductname} /><p></p>
           <TextField id="Standard" label="Product Category" variant="standard" input type="text" onChange={readproductcategory} /><p></p>
           <TextField id="Standard" label="Product Manufactured" variant="standard" input type="text" onChange={readproductmfd} /><p></p>
           <TextField id="Standard" label="Product Expiry" variant="standard" input type="text" onChange={readproductexp} /><p></p>     
      <p></p>
      <Button variant="outlined" onClick={checkfilldata}>Confirm</Button>
      &nbsp;&nbsp;&nbsp;
        <Link to={"http://localhost:3000/Productsview"} > 
        <Button variant='outlined' type='submit' >
        View
        </Button></Link>
    
 </form>
  {error && 'Error occured'}
    
      
    </div>
  )
}

export default Products
