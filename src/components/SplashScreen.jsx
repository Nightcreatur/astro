import React from 'react'
import './SplashScreen.css'
import clouds from '../assets/clouds.svg'
import cupid from '../assets/cupid.svg'
import { Link } from 'react-router-dom'
import swipeArrow from '../assets/Swipe Arrow.svg'




const SplashScreen = () => {
    return (<>

        <div className='main'>
            <div>
                <img className='clouds' src={clouds} alt="clouds" />
            </div>
            <h3>FIND YOUR LOVE AT</h3>
            <h1 className='logo'>AstroAmor</h1>
            <div>
                <img className='cupids' src={cupid} alt="" />

            </div>
            <div>
                <img className='clouds' src={clouds} alt="clouds" />
            </div>

        </div>
        <div className='swipe'>
            <Link to='/l2'>
                <img className='arrow' src={swipeArrow} alt="" />
            </Link>
        </div>
    </>
    )
}

export default SplashScreen