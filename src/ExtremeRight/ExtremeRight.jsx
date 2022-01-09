import React from 'react'
import Footer from '../Footer/Footer'
import SearchTwitter from '../SearchTwitter/SearchTwitter'
import WhatsHappening from '../WhatsHappening/WhatsHappening'
import WhoToFollow from '../WhoToFollow/WhoToFollow'
import './ExtremeRight.scss'
const ExtremeRight = () => {
    return (
        <section className='extremeRight'>
            <SearchTwitter/>
            <WhatsHappening/>
            <WhoToFollow/>
            <Footer/>
        </section>
    )
}

export default ExtremeRight
