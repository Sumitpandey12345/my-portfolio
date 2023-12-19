import React from 'react'
import { createContext } from 'react'
import {useMediaQuery} from "react-responsive"

 export const ScreenContext= createContext()

 const ScreenContextProvider = ({children}) => {
    const isTablet = useMediaQuery({query : "(max-width : 1080px)"})
    const isMobile = useMediaQuery({query : "(max-width : 767px)"})
  return (
   <ScreenContext.Provider value={{isMobile,isTablet}}>
    {children}
   </ScreenContext.Provider>
  )
}

export default ScreenContextProvider