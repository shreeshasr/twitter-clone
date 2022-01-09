import React from 'react'
import LeftNavbarItem from './LeftNavbarItem'
import './LeftNavbar.scss'
import Profle from './Profle'
const LeftNavbar = () => {
    const navbarItems = [
        {
            icon: "fab fa-twitter",
            title: "",
            link: ""
        },
        {
            icon: "far fa-home",
            title: "Home",
            link: ""
        },
        {
            icon: "far fa-hashtag",
            title: "Explore",
            link: ""
        },
        {
            icon: "far fa-bell",
            title: "Notifications",
            link: ""
        },
        {
            icon: "far fa-envelope",
            title: "Messages",
            link: ""
        },
        {
            icon: "far fa-bookmark",
            title: "Bookmarks",
            link: ""
        },
        {
            icon: "far fa-list-alt",
            title: "Lists",
            link: ""
        },
        {
            icon: "far fa-user",
            title: "Profile",
            link: ""
        },
        {
            icon: "far fa-ellipsis-h",
            title: "More",
            link: ""
        },
    ]
    return (
        <section className='leftNavbar'>
            <div className="navbarItems">
                {
                    navbarItems.map( (item) => {
                        console.log(item)
                        return <LeftNavbarItem item={item}/>
                    })
                }
            </div>
            <button className='tweetButton'>Tweet</button>
            <Profle/>
        </section>
    )
}

export default LeftNavbar
