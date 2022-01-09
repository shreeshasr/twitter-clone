import React from 'react'
import './SingleWhatsHappening.scss'
const SingleWhatsHapening = ({whatsHappening}) => {
    return (
        <section className='singleWhatsHappening'>
            <div className="singleWhatsHappeningLeft">
                <div className="whatsHappeningCategoryStatus">{whatsHappening.categoryStatus}</div>
                <div className="whatsHappeningText">{whatsHappening.text}</div>
                <div className="whatsHappeningExtraInfo">{whatsHappening.extraInfo}</div>
            </div>
            <div className="singleWhatsHappeningRight">
                {whatsHappening.postImage  !== "" ? <img src={whatsHappening.postImage} alt="shreesha" className="whatsHappeningImage"/> : <i className="far fa-ellipsis-h"></i>}
            </div>
        </section>
    )
}

export default SingleWhatsHapening
