import React from 'react'
import Button from 'react-bootstrap/Button';
import images from './assets/asset'
import './form.css'

const forms = () => {
  return (
    
    <div>
      <div className='back'>
        <h1 className='text-center'>Contact</h1>
        
         <img className='img' src={images.contact}  alt="" />
        
       <div class="row mb-5  ms-3 d-flex justify-content-center">
          <div className='division'>
                <div class="col-12 col-lg-6 mb-5" >
                    <form action="">
                        <div class="form-group mb-2">
                            <label>Name</label>
                            <input class="form-control border border-dark" type="text" name="" id=""/>
                        </div>
                        <div class="form-group mb-2">
                        <label for="">Email Address</label>
                        <input  class="form-control border border-dark "  type="email" name="" id=""/>
                        </div>
                          <div class="form-group">
                        <label for="">Message</label>
                        <textarea  class="form-control border border-dark"  name="" id="" cols="5" rows="3"></textarea>
                        <button type="button" class=" btn  btn-outline-dark bg-gradient px-5 py-1 mt-5 mb-5">Submit</button>
                        
                        
                        </div>
                    </form>

                </div>
           </div>
        </div>
      </div>

                <div>
                  <footer className=' foot  text-dark text-center '>
                     <p className='footer'> Thanks for visiting. Stay connected! | @ 2025 INDIAN FOODS </p> {/*| <img src={images.wapp} height={30} alt="" /> <img src={images.insta} height={40} alt="" /> */}
                    <p></p>
                  </footer>
                </div>
                
    </div>
  )
}

export default forms
