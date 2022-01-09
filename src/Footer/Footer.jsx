import React from 'react'
import './Footer.scss'
const Footer = () => {
    const footerItems = [
        {
            text: "Terms of Service",
            link: ""
        },
        {
            text: "Privacy Policy",
            link: ""
        },
        {
            text: "Cookie Policy",
            link: ""
        },
        {
            text: "Accessibility",
            link: ""
        },
        {
            text: "Ads info",
            link: ""
        },
        {
            text: "More ···",
            link: ""
        },
        {
            text: "© 2022 Twitter, Inc.",
            link: ""
        },
    ]
    return (
        <section className='footer'>
            {
                footerItems.map( (item) => {
                    return <a className='footerItem' href={item.link}>{item.text}</a>
                })
            }
        </section>
    )
}

export default Footer
