import React from 'react'
import "./SearchTwitter.scss"
const SearchTwitter = () => {
    return (
        <section className='searchTwitter'>
            <i className="far fa-search"></i>
            <input type="text" className="searchInput" placeholder="Search Twitter"/>
        </section>
    )
}

export default SearchTwitter
