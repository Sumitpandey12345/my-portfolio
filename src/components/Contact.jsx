import React from 'react'
import "./Contact.css"
import LinkdinImg from "../assets/Linkdin.png.png"

export const Contact = () => {
  return (
    <div className='contact' name="contact" id='contact'>
       <h1>Contact Me</h1>
       <hr />
       <div className='icons'>
      <a href='https://github.com/Sumitpandey12345'><img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png'/></a>
      <a href="https://www.linkedin.com/in/sumit-kumar-pandey-75857627a/"><img src={LinkdinImg} alt="" /> </a>
      <a href="mailto:spandey0543@gmail.com"><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-256.png" alt="" /></a>
      <a href="tel:+917488233675"><img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-256.png" alt="" /></a>
       </div> 
      </div>
  )
}
