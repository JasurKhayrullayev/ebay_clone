import React from 'react'
import "./Hero.scss"
import { Container , MainLink} from '../../utils/Components'
import brandOutlet from "../../assets/brand-outlet.png"
import saveIt from "../../assets/save-it.png"

function Hero() {
  return (
    <div className='hero__body'>
        <Container>
            <div className='hero__wrapper'>
                <MainLink link={"/"} title={"Home"}/>
                <MainLink link={""} title={"Saved"}/>
                <MainLink link={"/"} title={"Motors"}/>
                <MainLink link={"/"} title={"Electronics"}/>
                <MainLink link={"/"} title={"Collectibles"}/>
                <MainLink link={"/"} title={"Home & Garden"}/>
                <MainLink link={"/"} title={"Fashion"}/>
                <MainLink link={"/"} title={"Toys"}/>
                <MainLink link={"/"} title={"Sporting Goods"}/>
                <MainLink link={"/"} title={"Business & Industrial"}/>
                <MainLink link={"/"} title={"Jewelry & Watches"}/>
                <MainLink link={"/"} title={"eBay Live"}/>
                <MainLink link={"/"} title={"Refurbished"}/>
            </div>
        </Container>
        <img className='hero__brand' src={brandOutlet} alt="brand-outlet" />
        <img className='hero__save' src={saveIt} alt="save-it" />
    </div>
  )
}

export default Hero