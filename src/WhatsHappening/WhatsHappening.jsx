import React from 'react'
import Header from '../Header/Header'
import ashes from '../images/ashes.jpeg'
import laliga from '../images/laliga.jpeg'
import SingleWhatsHapening from './SingleWhatsHapening'
import './WhatsHappening.scss'
const WhatsHappening = () => {
    const whatsHappening = [
        {
            categoryStatus: "The Ashes 2021/22 · LIVE",
            postImage: ashes,
            text: "The Ashes: England holds out to clinch a draw with Australia in the fourth Test",
            extraInfo: "Trending with Steve Smith"
        },
        {
            categoryStatus: "Cricket · Trending",
            postImage: "",
            text: "Sir Jadeja",
            extraInfo: "2,665 Tweets"
        },
        {
            categoryStatus: "Trending in India",
            postImage: "",
            text: "Narendra Modi",
            extraInfo: "103.7K Tweets"
        },
        {
            categoryStatus: "La Liga · Starts at 8:45 PM",
            postImage: laliga,
            text: "The Ashes: England holds out to clinch a draw with Australia in the fourth Test",
            extraInfo: "Trending with Steve Smith"
        },
    ]
    return (
        <section className='whatsHappening'>
            <Header headerTitle={"What's happening"}/>
            {
                whatsHappening.map( (item) => {
                    return <SingleWhatsHapening whatsHappening={item}/>
                })
            }
            <a href='###' className='showMore'>Show more</a>
        </section>
    )
}

export default WhatsHappening
