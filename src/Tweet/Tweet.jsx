import React from 'react'
import shreesha from '../images/shreesha.jpg'
import './Tweet.scss'
const Tweet = () => {
    const icons = [
        {
            icon : "fa fa-image",
            title: "media"
        },
        {
            icon : "fa fa-film",
            title: "GIF"
        },
        {
            icon : "fa fa-poll",
            title: "poll"
        },
        {
            icon : "fa fa-smile",
            title: "emoji"
        },
        {
            icon : "fa fa-calendar-alt",
            title: "schedule"
        },
        {
            icon : "fa fa-map-marker-alt",
            title: "location"
        },
    ]
    return (
        <div className='tweet'>
             <img src={shreesha} alt="shreesha" className="profileImage"/>
             <div className="tweetInputs">
                <textarea className='tweetContent' placeholder="What's happening?"></textarea>
                <div className="iconsAndSubmit">
                    <div className="uploadOptionIcons">
                    {
                        icons.map( (icon) => {
                            return <i className={icon.icon}></i>
                        })
                    }
                    </div>
                    <button className='tweetButtonSmall'>Tweet</button>
                </div>
             </div>
        </div>
    )
}

export default Tweet
