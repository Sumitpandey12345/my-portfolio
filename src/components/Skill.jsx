import React from 'react'
import "./Skill.css"
import Logo1 from "../assets/badge-html-5-512.png.png"
import Logo2 from "../assets/badge-css-3-512.png.png"
import Logo3 from "../assets/javascript-language-256.png.png"
 import Logo4 from "../assets/node-js.png.png"
 import Logo5 from "../assets/React.js_logo-256.png.png"
 import Logo6 from "../assets/chakra-mlv1Wwgd.png"

export const Skill = () => {
  return (
    <div className='skill' name="skill">
        <h1 >Skills</h1>
        <hr/>
        <div className='images'>
         <div>
          <img src={Logo1} alt="" />
          <h2>HTML</h2>
         </div>
         <div>
          <img src={Logo2} alt="" />
          <h2>CSS</h2>
         </div>
         <div>
          <img src={Logo3} alt="" />
          <h2>Java-Script</h2>
         </div>
         <div>
          <img src={Logo4} alt="" />
          <h2>Node-Js</h2>
         </div>
         <div>
          <img src={Logo5} alt="" />
          <h2>React</h2>
         </div>
         <div>
          <img src={Logo6} alt="" />
          <h2>Chakra-UI</h2>
         </div>

        
         
        </div>
    </div>
  )
}
