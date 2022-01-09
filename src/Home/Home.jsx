import React from 'react'
import ExtremeRight from '../ExtremeRight/ExtremeRight'
import Header from '../Header/Header'
import Tweet from '../Tweet/Tweet'
import TweetsInFeeds from '../TweetsInFeeds/TweetsInFeeds'
import './Home.scss'
const Home = () => {
    return (
        <section className='home'>
            <div className="lefttHomeContent">
                <Header headerTitle={"Home"}/>
                <Tweet/>
                <TweetsInFeeds/>
            </div>
            <div className="rightHomeContent">
                <ExtremeRight/>
            </div>
            
        </section>
    )
}

export default Home
