import React from 'react'
import "./Header.scss"
import {Container} from "../../utils/Components"
import {BsBell} from "react-icons/bs"
import {SlBasket} from "react-icons/sl"
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const data = useSelector(data => data);
    const location = useLocation()
  return (
    <>
       {
        !(location.pathname.includes("signIn") || location.pathname.includes("register")) && 
        <Container>
               <div className='header__wrapper'>
                   <span className='header__hi'>HI!</span>
                   <Link
                       className="header__signIn"
                       to={"/signIn"}
                   >{data?.login?.email ? data.login.email : "Sign in"}</Link>
                   <span className='header__or'>OR</span>
                   <Link
                       className="header__register"
                       to={"/register"}
                   >register</Link>
                   <p className='header__parag'>Daily Deals</p>
                   <p className='header__parag'>Brand Outlet</p>
                   <p className='header__parag'>Brand Outlet</p>
                   <p className='header__parag-own'>Sell</p>
                   <select className='header__watch'>
                       <option value="">Watchlist</option>
                       <option value="">one</option>
                       <option value="">two</option>
                       <option value="">three</option>
                   </select>
                   <select className='header__my'>
                       <option value="">My eBay</option>
                       <option value="">one</option>
                       <option value="">two</option>
                       <option value="">three</option>
                   </select>
                   <Link       className='header__bell'><BsBell/></Link>
                   <Link className='header__basket' to={"/basket"}><SlBasket/></Link>
               </div>
       </Container>
       }
    </>
  )
}

export default Header