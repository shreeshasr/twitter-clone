import React from 'react'
import { useSelector } from 'react-redux'
import SingleTweet from '../SingleTweet/SingleTweet'

const TweetsInFeeds = () => {

    const tweets = useSelector( state => state.tweetsReducer.tweets)
    return (
        <section className='tweetsInFeeds'>
            {
                tweets.map( (tweet) => {
                    return <SingleTweet tweet={tweet}/>
                })
            }
        </section>
    )
}

export default TweetsInFeeds
