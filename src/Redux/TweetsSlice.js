import { createSlice } from "@reduxjs/toolkit";
import coronapost from '../images/coronapost.jpeg'
import ministryimage from '../images/ministryimage.jpeg'
import kohlipost from '../images/kohlipost.jpeg'
import kohli from '../images/kohli.jpeg'
import elon from '../images/elon.jpeg'
import groww from '../images/groww.jpeg'
import urvashi from '../images/urvashi.jpeg'
import urvashipost from '../images/urvashipost.jpeg'
import arijit from '../images/arijit.jpeg'
import arijitpost from '../images/arijitpost.jpeg'
import hitesh from '../images/hitesh.jpeg'
import hiteshpost from '../images/hiteshpost.jpeg'
import bookmyshow from '../images/bookmyshow.jpeg'
import yash from '../images/yashpost.jpeg'
import news from '../images/news.png'
const initialState = {
    tweets: [
        {
            tweetText: "Tesla FSD price rising to $12k on Jan 17",
            userImage: elon,
            userName: "Elon Musk",
            isVerifiedUser: true,
            userId: "@elonmusk",
            tags: "BCCI",
            commentsCount: 9999,
            postImage: "",
            retweetsCount: 12087,
            likesCount: 998865,
            date: "Just now"
        },
        {
            tweetText: "#IndiaFightsCorona\n One of the way to beat COVID-19 is to get vaccinated. It is safe and effective, with no known serious side effects. Please get yourself vaccinated when it’s your turn.",
            userImage: ministryimage,
            isVerifiedUser: true,
            userName: "Ministry of Health",
            userId: "@healthministry",
            tags: "WHO",
            commentsCount: 345,
            postImage: coronapost,
            retweetsCount: 3412,
            likesCount: 9767,
            date: "1h"
        },
        {
            tweetText: "We hope everyone is blessed with joy and happiness this new year. We send you our love and positivity. Red heart",
            userImage: kohli,
            userName: "Virat Kohli",
            isVerifiedUser: true,
            userId: "@imVkohli",
            tags: "BCCI",
            commentsCount: 3455,
            postImage: kohlipost,
            retweetsCount: 13488,
            likesCount: 108865,
            date: "Jan 1"
        },
        {
            tweetText: "100 ಮಿಲಿಯನ್‌ ಡಾಲರ್‌ ಕೊಟ್ಟು ಅಮೆರಿಕದ ಪ್ರಸಿದ್ಧ ಪಂಚತಾರಾ ಹೋಟೆಲ್‌ ಖರೀದಿಸಿದ ರಿಲಾಯನ್ಸ್‌!",
            userImage: news,
            userName: "News desk",
            isVerifiedUser: false,
            userId: "@newslocal",
            tags: "BCCI",
            commentsCount: 12,
            postImage: "",
            retweetsCount: 3,
            likesCount: 34,
            date: "3h"
        },
        {
            tweetText: "If in an empty area, a tyre gets punctured and you do not have a spare wheel, arranging for a cab or some sort of help to your destination will end up costing many thousands.",
            userImage: groww,
            userName: "Groww",
            isVerifiedUser: true,
            userId: "@_groww",
            tags: "BCCI",
            commentsCount: 872,
            postImage: "",
            retweetsCount: 67,
            likesCount: 1434,
            date: "5h"
        },
        {
            tweetText: "Postman thanks for the great product team",
            userImage: hitesh,
            userName: "Hitesh Chaudhary",
            isVerifiedUser: true,
            userId: "@hiteshchaudhary",
            tags: "BCCI",
            commentsCount: 513,
            postImage: hiteshpost,
            retweetsCount: 111,
            likesCount: 2064,
            date: "25m"
        },
        {
            tweetText: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty. I miss you all my babies",
            userImage: urvashi,
            userName: "URVASHI RAUTELA 🇮🇳",
            isVerifiedUser: true,
            userId: "@UrvashiRautea",
            tags: "BCCI",
            commentsCount: 7672,
            postImage: urvashipost,
            retweetsCount: 557,
            likesCount: 87745,
            date: "2d"
        },
        {
            tweetText: "Hello Abu Dhabi Looking forward to perform with you on 19th November 2021 at Etihad Arena, Yas Island.",
            userImage: arijit,
            userName: "Arijit Singh",
            isVerifiedUser: true,
            userId: "@arijitsingh",
            tags: "BCCI",
            commentsCount: 1112,
            postImage: arijitpost,
            retweetsCount: 557,
            likesCount: 23316,
            date: "Nov 21, 2021"
        },
        {
            tweetText: "Wishing KGF Actor Yash a very happy birthday",
            userImage: bookmyshow,
            userName: "BookMyShow",
            isVerifiedUser: true,
            userId: "@bookmyshow",
            tags: "BCCI",
            commentsCount: 76112,
            postImage: yash,
            retweetsCount: 210,
            likesCount: 666643,
            date: "An hour ago"
        }
    ]

}

export const tweetsSlice = createSlice({
    name: "tweets",
    initialState,
    reducers:{

    }

})

export const {} = tweetsSlice.actions

export default tweetsSlice.reducer