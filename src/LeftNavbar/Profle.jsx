import React from 'react'
import shreesha from '../images/shreesha.jpg'
import './Profile.scss'
const Profle = () => {
    return (
        <div className='profile'>
            <img src={shreesha} alt="shreesha" className="profileImage"/>
            <div className="rightProfileInfo">
                 <div className="profileName">Shreesha</div>
                 <div className="profileUserName">@Tweet_Shreesha</div>
            </div>
            <i className="far fa-ellipsis-h"></i>
        </div>
    )
}

export default Profle
