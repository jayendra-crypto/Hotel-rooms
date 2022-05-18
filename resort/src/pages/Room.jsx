import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import image1 from '../images/room-2.jpeg'
import RoomsContainer from '../components/RoomsContainer'
const Room = () => {
    return (
        <>
        <Hero hero="roomsHero" image={[image1]} >
            <Banner title="Our Rooms">
                <Link to="/" className="btn-primary">
                    return Home
                </Link>
            </Banner>
        </Hero>
        <RoomsContainer/>
        </>
    )
}
export default Room;
