import React from 'react'
import {Container , MainLink} from "../../utils/Components"
import { Link , useLocation } from 'react-router-dom'
import "./Footer.scss"
import vector from "../../assets/vector.svg"

function Footer() {
  
  const location = useLocation()
  return (
    <>
      {
        !(location.pathname.includes("signIn") || location.pathname.includes("register")) &&
        <div className='footer__wrapper'>
        <Container>
            <div className='footer__mainlink'>
                <MainLink title={"About eBay"}/>
                <MainLink title={"Announcements"}/>
                <MainLink title={"Community"}/>
                <MainLink title={"Security Center"}/>
                <MainLink title={"Seller Center"}/>
                <MainLink title={"Policies"}/>
                <MainLink title={"Affiliates"}/>
                <MainLink title={"Help & Contact"}/>
                <MainLink title={"Site Map"}/>
            </div>
            <div className='footer__link-wrapper'>
                <p className='footer__link-parag'>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>
                <Link className='footer__link'>Accessibility,</Link>
                <Link className='footer__link'>User Agreement,</Link>
                <Link className='footer__link'>Privacy,</Link>
                <Link className='footer__link'>Payments Terms of Use,</Link>
                <Link className='footer__link'>Cookies,</Link>
                <Link className='footer__link'>Your Privacy Choices,</Link>
                <p>and</p>
                <Link className='footer__link'>AdChoice</Link>
                <img src={vector} alt="" />
            </div>
        </Container>
    </div>
      }
    </>
  )
}

export default Footer