import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const selectore = useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <span className='logo'> Flipf Store</span>
        <div>
            <Link style={{marginRight:"1rem"}}  className='navLink' to={'ReduxProject_01'}> Home</Link>
            <Link className='navLink' style={{marginRight:"2rem"}}  to={'/cart'}>Cart</Link>
            <span className='CartCount'>Cart Items :- {selectore.length}</span>
        </div>
      
    </div>
  )
}

export default Navbar;
