import React, { useState } from 'react'

const Book = () => {
    const [bn,setBn]=useState('');
    const [an,setAn]=useState('');
    const [pb,setPb]=useState(''); 
    const [error,setError]=useState(false); 
    const readbookname =(event) =>{
        event.preventDefault();
        setBn(event.target.value);
        console.log(event.target.value);
    }
    const readauthorname =(event) =>{
        event.preventDefault();
        setAn(event.target.value);
        console.log(event.target.value);
    }
    const readpublishername =(event) =>{
        event.preventDefault();
        setPb(event.target.value);
        console.log(event.target.value);
    }
    const checkfilldata =(event) =>{
        event.preventDefault(); //to not to refresh
        if(bn.trim()===''||an.trim()===''||pb.trim()==='')
        {
          setError(true);
          return;
        }
        else
        {
            const myobj={
                bookname:bn,
                authorname:an,
                publishername:pb
            }
            
            
            fetch("https://sampledbsccs-default-rtdb.firebaseio.com/sampledbsccs.json",
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
        <form>
      Book Name:<input type="text" onChange={readbookname}/><br/>
      Author Name:<input type="text" onChange={readauthorname}></input><br/>
      Publisher Name:<input type="text" onChange={readpublishername}></input><br/>
      <button type="submit" onClick={checkfilldata}>Login</button>
 </form>
  {error && 'Error occured'}
    
    </div>
  )
}

export default Book
