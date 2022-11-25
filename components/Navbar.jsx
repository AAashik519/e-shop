import React from 'react'
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
const Navbar = () => {
  const {showCart , setShowCart , totalQuantities}= useStateContext()
  return (
    <div className='navbar-container'>
      <div className='n-header' >
      <p className='logo'>
          <Link href='/'>
             Unique Headphones
          </Link>
        </p> 
      </div>
        <div className='menu' >
          <ul >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="product">products</Link>
            </li>
            <li>
              <Link href="Register">Login</Link>
            </li>
            <li>
              <Link href="Login">Register</Link>
            </li>
          </ul>
        <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
        </div>

       
        {showCart && <Cart /> }
      
      
    </div>
  )
}

export default Navbar