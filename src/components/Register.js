import React, { useState } from 'react'

const Register = () => {
var[name,setname]=useState()
 const changename=()=>{
setname(name='anoop')
}

  return (
    <div >          
    <nav class="navbar bg-dark">
            <div class="container-fluid ">
              <a class="navbar-brand" href="#">
                <img src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                Bootstrap
              </a>
            </div>
          </nav>
     
    <div class="container  ">
          <div class="row g-5">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div class="row g-2 ">
                        <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label for="" class="form-label">name</label>
                          <input type="text" class="form-control"placeholder="enter name"/></div>
                        <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label for="" class="form-label">password</label> 
                         <input type="password" class="form-control"placeholder="enter password"/></div>
                        <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label for="" class="form-label">mobile number</label>
                          <input type="number" class="form-control"placeholder="enter number"/></div>
                        <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label for="" class="form-label">date of birth</label>
                          <input type="date" class="form-control"placeholder="enter DOB "/></div>
                        <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 "> <input type="button" value="register" class="btn btn-dark" /></div>
                  </div>
                    
                </div>
          </div>
    </div></div>
  )
}

export default Register