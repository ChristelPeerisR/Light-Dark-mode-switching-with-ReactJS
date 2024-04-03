import React from 'react'
import './Navbar.css'
import logob from '../../assets/logo-black.png';
import logow from '../../assets/logo-white.png';
import searchb from '../../assets/search-b.png';
import searchw from '../../assets/search-w.png';
import night from '../../assets/night.png';
import day from '../../assets/day.png';

const Navbar = ({theme, setTheme}) => {
    const toogle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logob : logow} alt="" className='logo'/>
        <ul>
            <li><a>Home</a></li>
            <li><a>Menu</a></li>
            <li><a>What's New</a></li>
            <li><a>Locations</a></li>
            <li><button className="btn">Start Your Order</button></li>
            <li><button className="btn">Log In</button></li>
        </ul>
        <div className='search'>
            <input type="text" placeholder='Search'/>
            <img src={theme == 'light' ? searchw : searchb} alt=""/>
        </div>
        <img onClick={()=>{toogle_mode()}} src={theme == 'light' ? night : day} alt="" className='toogle'/>
    </div>
  )
}

export default Navbar