import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScreenContextProvider from './Context/ScreenContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<ScreenContextProvider>

    <App />
</ScreenContextProvider> 

 
)
