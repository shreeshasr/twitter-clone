import React from 'react'
import "./SingleTweet.scss"
const SingleTweet = ({tweet}) => {
    console.log(tweet.tags)
    return (
        <div className='singleTweet'>
            <img src={tweet.userImage} alt="shreesha" className="profileImage"/>
            <div className="singleTweetContent">
                <div className="singleTweetPersonInfoWithDate">
                    <div className="singleTweetPersonInfoWithDateLeft">
                        <div className="singleTweetUsername">{tweet.userName}</div>
                        {tweet.isVerifiedUser ? <i class="far fa-check-circle"></i> : ""}
                        <div className="singleTweetUserId">{tweet.userId}</div>
                        <div className="singleTweetDate">{tweet.date}</div>
                    </div>
                    <div className="singleTweetPersonInfoWithDateRight">
                        <i className="far fa-ellipsis-h"></i>
                    </div>
                </div>
                <div className="singleTweetText">{tweet.tweetText}</div>
                <div className="singleTweetTags">
                {
                    tweet.tags.map( (tag) => {
                       return <span className='hashtag'>#{tag}</span>
                    })
                }
                </div>
                {tweet.postImage  !== "" ? <img src={tweet.postImage} alt="shreesha" className="postedImage"/> : ""}
                <div className="tweetActions">
                    <div className="singleTweetComments"><i className="far fa-comment"></i> {tweet.commentsCount.toLocaleString()}</div>
                    <div className="singleTweetRetweets"><i className="far fa-retweet"></i> {tweet.retweetsCount.toLocaleString()}</div>
                    <div className="singleTweetLikes"><i className="far fa-heart"></i> {tweet.likesCount.toLocaleString()}</div>
                    <div className="singleTweetShare"><i className="far fa-share"></i></div>
                </div>
            </div>
        </div>
    )
}

export default SingleTweet
