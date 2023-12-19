import React, { useContext } from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"
import {bubble as Menu} from "react-burger-menu"
import { ScreenContext } from '../Context/ScreenContextProvider'



export const Navbar = () => {
  const {isMobile} = useContext(ScreenContext)
  return (
   
    <div className='navbar'>
      <h2 className='port'>Portfolio</h2>
      <div className='link'>{isMobile?<Menu right noOverlay>
        <Link 
      activeClass="active" 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
    
    >
      Home
    </Link>
     <Link 
      activeClass="active" 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
      
    >
      About Me
    </Link>
    <Link 
      activeClass="active" 
      to="skill" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
      
    >
     Skills
    </Link>
    <Link 
      activeClass="active" 
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
      
    >
     Contact
    </Link>

      </Menu>:
     <nav className='ch'>
     <Link 
      activeClass="active" 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
    
    >
      Home
    </Link>
     <Link 
      activeClass="active" 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
      
    >
      About Me
    </Link>
    <Link 
      activeClass="active" 
      to="skill" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
      
    >
     Skills
    </Link>
    <Link 
      activeClass="active" 
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
      
    >
     Contact
    </Link>
      </nav>  } 
     </div>  
    </div>
   
  )
}
