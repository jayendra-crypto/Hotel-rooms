import React ,{useContext}from 'react'
import {RoomContext} from '../context';
import Loading from './Loading'
import Title from './Title'
import Room from './Room'
function FeaturedRooms() {
    const co=useContext(RoomContext);
    let {featuredRooms:rooms,loading}=co;
     rooms=rooms.map(room =>{
        return <Room key={room.id} room={room}/>
    })
    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms"/>
            <div className="featured-rooms-center">
            {loading?<Loading/>:rooms}
            </div>
           
        </section>
    )
}

export default FeaturedRooms
