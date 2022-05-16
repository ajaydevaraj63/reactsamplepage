import React, { useState } from 'react'

const Counting = () => {
      var[num,setName]=useState(0);
      const Increment=()=>{
            setName(num++);
      }
      const Decrement=()=>{
            setName(num--);
      }
  return (
    <div>
          <div className="container">
<div className="row g-2">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
                  <div className="row g-3 div.col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl 6"><label for="" className="form-label">{num}</label></div>
                  <div className="row g-3 div.col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl 6"><input type="button" value="increment" className="btn btn-dark"onClick={Increment}/></div>
                  <div className="row g-3 div.col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl 6"><input type="button" value="decrement" classNAme="btn btn-dark"onClick={Decrement}/></div>
            </div>
      </div>
</div>
 </div>
  
  )
}

export default Counting