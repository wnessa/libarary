import React from 'react'
import './Navbar.css'
import { IoMdHome } from "react-icons/io";
import { GiBookPile } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const Navbar = () => {
  return (
    <div className='navbar home'>
        <div className="top">
            <div className="top--left">
                <h1>VaNBooks</h1>
            </div>
            <div className="main--nav top--right">
                <div className="col">
                    <Link style={{textDecoration: 'none', color: '#fff'}} to='/' className='colle'><IoMdHome className='ico-nav'/>Home</Link>
                </div>
                <div className="col">
                    <Link style={{textDecoration: 'none', color: '#fff'}} to='/books' className='colle'><GiBookPile className='ico-nav'/>Product</Link>
                </div>
                <button>Sign Up</button>
                <button>Login</button>
            </div>
            <Link style={{textDecoration: 'none'}} to='/cart'><FaCartArrowDown className='ico-nav cart'/></Link>
        </div>
    </div>
  )
}

export default Navbar;