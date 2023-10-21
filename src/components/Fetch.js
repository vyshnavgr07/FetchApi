import React, { useState,useEffect } from 'react'

const Fetch = () => {
    
    const [state,setstate]=useState([]);
   useEffect(()=>{ 
   fetch("https://dummyjson.com/quotes")
   .then(response=>response.json())
   .then(data=>setstate(data.quotes.splice(0,10)))
   .catch((error)=>console.error("error in fetching",error))
   },[])

  return (
    <div>
      {state.map((x)=>
    <h1>{x.quote}</h1>
    )}
    </div>
  )
}

export default Fetch