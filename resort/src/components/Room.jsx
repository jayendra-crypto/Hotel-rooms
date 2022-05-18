import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'
function Room({room}) {
    const {name,slug,price,images}=room;
    return (
        <article className="room">
        <div className="img-container">
            <img src={images[0] || defaultImg } alt="Single room"/>
            <div className="price-top">
                <h6>Rs:{price*70}</h6>
                <p>per night</p>
            </div>
            <Link to={`/rooms/${slug}`} className="btn-primary room-link">
              Features
            </Link>
            <p className="room-info">{name}</p>
        </div>
        
        </article>
    )
}

Room.propTypes = {
    room:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired
    })
}

export default Room
