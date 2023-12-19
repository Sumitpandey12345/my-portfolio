import React, { useEffect } from 'react'
import "./Home.css"
import Image from "../assets/My_image.jpg"
import resume from "../assets/Sumit-Kumar-Pandey-Resume.pdf"

export const Home = () => {
  useEffect(()=>{
    let resumeBtn = document.querySelectorAll(".resume")
    for(let element of resumeBtn){
      element.addEventListener("click", handleClick)
    }
  },[])
  const handleClick = ()=>{
    open("https://drive.google.com/file/d/1-fnNVwuiV1aAuKo1IjeYEYHajZGbfLIA/view?usp=drive_link")
  }
  return (
    <div className='homeContainer' name='home' id='home'>
      <div className='main'>
        <div className='home'>
      <div className='ch1'>
        <h3>Hello, It's Me</h3>
        <h2 className='name'>Sumit Pandey</h2>
        <h2>And I'm a <span>Web Devloper</span></h2>
        <p>I'm a web Designer experties is to create and </p>
        <p>website design, Frontend design, and many more...</p>
        <button className='resume'><a  href={resume} download>My-Resume</a></button>
        
      </div>
      <div className='ch2'>
        <img src={Image} alt="myImage" className='myImage' />
      </div>  
    </div>
    </div>
    </div>

  )
}
