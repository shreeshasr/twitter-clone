import React from 'react'
import "./SingleWhoToFollow.scss"
const SingleWhoToFollow = ({whoToFollow}) => {
    return (
        <div className='singleWhoToFollow'>
            <img src={whoToFollow.image} alt="shreesha" className="profileImage"/>
            <div className="userNameAndId">
                <div className="userName">{whoToFollow.userName}</div>
                <div className="userId">{whoToFollow.userId}</div>
            </div>
            <button className='follow'>Follow</button>
        </div>
    )
}

export default SingleWhoToFollow
