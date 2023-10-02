import React from 'react'
import './Contact.css'
import telephone from '../../images/telephone.jpg'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
        <div className='container contact' id='contact'>
            <div className='card card0 border-0'>
              <div className='row'>
                <div className='col-md-6 col-lg-6 col-xL-6 col-sm-12'>
                  <div className='card1'>
                    <div className='row border-line'>
                      <img src={telephone} alt='contact' className='image'/>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                
                  <div className='card2 d-flex border-0 card px-4 py-5'>
                  <div className='row'>
                  <div className='row'>
                  <h6>Contact with 
                  <BsLinkedin color='blue' size={30} className='ms-2'/>
                  <BsGithub color='black' size={30} className='ms-2'/>
                  <BsInstagram color='#E1306C' size={30} className='ms-2'/>
                  </h6>
                  </div>
                   
                  
                  <div className='row px-3 mb-4'>
                    <div className='line'/>
                      <small className='or text-center'>OR</small>
                      <div className='line'/>
                  </div>
                  <div className='row px-3'>
                    <input type='text' name='name' placeholder='Enter Your Name' className='mb-3'/>
                  </div>
                  <div className='row px-3'>
                    <input type='email' name='email' placeholder='Enter Your Email Address' className='mb-3'/>
                  </div>
                  <div className='row px-3'>
                    <textarea type='text' name='msg' placeholder='Write Your Message' className='mb-3'/>
                  </div>
                  <div className='row px-3'>
                    <button type='submit' className='button'>SEND MESSAGE</button>
                  </div>
                </div>
                </div>
              </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Contact