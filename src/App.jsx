import { useEffect, useState } from 'react'
import './App.css'
import Inicio from './Pages/Inicio'
import Header from './Components/Header'
import { Tema } from './Context/Tema'

function App() {
  const [count, setCount] = useState(0)
const [theme, setTheme] = useState('dark')
useEffect(() => {
setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'): 'dark')
}, [])

  return (
    <Tema.Provider value={{theme, setTheme}}>
    <div className={`${theme}
     ${theme=='dark' ?'bg-[#121212]' :null} h-[100vh]`}>
    <Header />
    <Inicio />
    </div>
    </Tema.Provider>
  )
}

export default App
