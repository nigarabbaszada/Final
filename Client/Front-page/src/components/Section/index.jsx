// import React from 'react'

import React, {useState,useEffect} from 'react'

const Section = () => {


const[securtys,setSecurtys]=useState([])

useEffect(()=>{
    fetch('http://localhost:7070/securitys')
    .then(res=>res.json())
    .then(info=>
        setSecurtys(info)
        )
},[])

const[value,setValue]=useState('')
const handleChange=(e)=>{
    setValue(e.target.value)
}


const[sort,setSort]=useState(true)


function handleSort(){
  if(sort===true){
    setSecurtys(securtys.sort((x,y)=>x.price-y.price))
    setSort(false)
  }
  else{
    setSort(true)
    setSecurtys(securtys.sort((x,y)=>y.price-x.price))
  }
}







  return (
<>
      
<section> 
<div className='textBox'> <input className='text' type="text" placeholder='search by name' onChange={handleChange} />
<button className='sortBtn' onClick={handleSort}>Sort by Price</button>
</div>

   
    <div className='sectionmainBox'>
   





        


{securtys && securtys.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))
.map((securty)=>(


<div className='sectionBox'>
<img className='sectionImg' src="https://preview.colorlib.com/theme/security/img/s1.jpg" alt="" />
<div className='sectionText'>
   
   <h2>{securty.name}</h2>
   <br />
   <p>{securty.title}</p>
   <br />
   <span>price:{securty.price}</span>
  

    
       

   
</div>
</div>



))}


       

    </div>
</section>









</>
  )
}

export default Section