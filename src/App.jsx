import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Head from './Components/Head/Head'
import Menu from './Components/Menu/Menu'
import Title from './Components/Title/Title'

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])
  return (
    <div className={`${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Head/>
      <div className='container'>
        <Title title='SATISFY YOUR CRAVINGS'/>
        <Menu/>
      </div>
    </div>
  )
}

export default App