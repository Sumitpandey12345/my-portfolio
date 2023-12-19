import { useState } from 'react'
import "./index.css"
import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Skill } from './components/Skill'
import { Contact } from './components/Contact'

function App() {
 

  return (
    <>
     <div className='App'>
      <Navbar/>
       <Home/>
       <About/>
       <Skill/>
       <Contact/>
     </div>
        
    </>
  )
}

export default App