import React from 'react'
import react from '../images/react.png'
import rcb from '../images/rcb.jpeg'
import google from '../images/google.jpeg'
import SingleWhoToFollow from './SingleWhoToFollow'
import './WhoToFollow.scss'
import Header from '../Header/Header'
const WhoToFollow = () => {
    const whoToFollow = [
        {
            image: rcb,
            userName: "Royal Challengers Bangalore",
            userId: "@RCBTweets"
        },
        {
            image: google,
            userName: "Google",
            userId: "@Google"
        },
        {
            image: react,
            userName: "React",
            userId: "@reactjs"
        }
    ]
    return (
        <section className='whoToFollow'>
            <Header headerTitle={"Who To Follow"}/>
            {
                whoToFollow.map( (item) => {
                    return <SingleWhoToFollow whoToFollow={item}/>
                })
            }
            <a href='###' className='showMore'>Show more</a>
        </section>
    )
}

export default WhoToFollow
