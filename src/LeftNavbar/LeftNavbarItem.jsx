import React from 'react'
import './LeftNavbarItem.scss'
const LeftNavbarItem = ({item}) => {
    return (
        <div className='leftNavbarItem'>
            <i className={item.icon}></i>
            <div className="leftNavbarItemTitle">{item.title}</div>
        </div>
    )
}

export default LeftNavbarItem
