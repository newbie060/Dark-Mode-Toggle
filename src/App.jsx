import './App.css'
import NavBar from './Navbar'
import MainContent from './MainContent'
import { useState } from 'react'

function App() {
     const [darkMode, setDarkMode] = useState(true)

     function toggleDarkMode() {
          setDarkMode(prevMode => !prevMode)
     }

     return(
          <div className='container'>
          <NavBar
             darkMode={darkMode} 
             toggleDarkMode={toggleDarkMode}
          />
          <MainContent darkMode={darkMode}/>
          </div>
     )
}

export default App
