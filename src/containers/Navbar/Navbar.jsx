import { useCallback, useContext, useState,useEffect } from 'react';
import About from '../AboutPage/About';
import Home from '../../components/HomePage/HomePage';
import './Navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import ThemeContext from '../../themeContext';
import HeadingUnder from '../../components/HeadingDesign/HeadingUnder';
import { NavLink } from "react-router-dom"
import dark from './NavbarEssentials/dark.png'
import light from './NavbarEssentials/light.png'

export const NavElements = (props)=>{
    return(
        <>
                <div className='navbar-el' onClick={props.work}> <a href="#home" > Home</a></div>
                <div className='navbar-el' onClick={props.work}> <a href="#about" > About</a></div>
                {/* <div className='navbar-el' onClick={props.work}> <a href=""></a> Resume</div> */}
                <div className='navbar-el' onClick={props.work}> <a href="#skills" > Skills</a></div>
                <div className='navbar-el' onClick={props.work}> <a href="#projects" >Projects</a></div>
                <div className='navbar-el' onClick={props.work}> <a href="#contact" >Contact</a></div>
        </>
    )
}


const Navbar = (props) => {
    const [toggle,setToggle] = useState(false)
    const [modeIcon,setModeIcon] = useState(true)
    const cxt = useContext(ThemeContext);
    const changeColor = ()=>{
        setModeIcon(prev=>!prev)
        if (modeIcon === true){
            cxt.setAddDiv('dark')
        }
        else{
            cxt.setAddDiv('light')
        }
    }
    const  handleMenuToggle = ()=>{
        setToggle(false);
    }
    const  handleCloseToggle = ()=>{
        setToggle(true);
    }
    const handletoggle = ()=>{
        setToggle(false)
    }

    return ( 
        <div className={`navbar-container`}  >
            <div className='navbar-title'><HeadingUnder name="Portfolio" /></div>
            <div className="navbar-elements">
                <NavElements />
            </div>
            <div onClick={changeColor} className="wesite-color-change">{modeIcon? <img src={dark} alt="dark" />:<img src={light} alt="light" />}</div>
            <div className='navbar-toggle-menu'>
                {toggle?<RiCloseLine color='dark' onClick={handleMenuToggle} />:<RiMenu3Line color ="dark" onClick={handleCloseToggle} />}
                {toggle&&<div className={`navbar-toggle-menu-container ${cxt.addDiv}`}><NavElements work={handletoggle} /></div>}
            </div>
        </div>
     );
}
 
export default Navbar;