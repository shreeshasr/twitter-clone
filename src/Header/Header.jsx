import React from 'react'
import './Header.scss'
const Header = ({headerTitle}) => {
    return (
        <div className='header'>
            {headerTitle}
        </div>
    )
}

export default Header
