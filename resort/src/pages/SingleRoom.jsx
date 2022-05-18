import React, {useContext } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link, useParams } from 'react-router-dom'
import { RoomContext } from '../context'
const SingleRoom = () => {
    const { slug } = useParams();
    const co = useContext(RoomContext);
    
    const getRooms=(slug)=>{
        let tempRooms=[...co.rooms];
        const room=tempRooms.find(room=>room.slug===slug);
        
        return room;
        
    };
    const room=getRooms(slug);
    if(!room){
         return (
             <div className='error'>
                 <h3>
                     no such room could be find...
                 </h3>
                 <Link to="/rooms" className="btn-primary">back to home</Link>
             </div>
         )
    }

    const {name,description,price,capacity,size,extras,breakfast,pets,images}=room
    
    return (
                   
        <>
            <Hero hero="roomsHero" image={images} >
                <Banner title={slug} >
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
              </Link>
                </Banner>
            </Hero>
            <section className="single-room">
               <div className="single-room-images">
                     {images.map((item,index) => (
                         <img key={index} src={item} alt={name}/>
                     ))}
               </div>
               <div className="single-room-info">
                   <article className="desc">
                         <h3>details</h3>
                         <p>{description}</p>
                   </article>
                   <article className="info">
                          <h3>info</h3>
                          <h6>price : Rs.{price*70}</h6>
                          <h6>size: {size} SQFT</h6>
                          <h6>max capacity : {`${capacity} people`}</h6>
                          <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                          <h6>{breakfast && "free breakfast included"}</h6>
                   </article>
               </div>
            </section>
            <section className="room-extras">
                     <h6>extras</h6>
                     <ul className="extras">
                         {extras.map((item,index) =>{
                             return <li key={index}>-{item}</li>
                         })}
                     </ul>
            </section>
        </>
    )
}
export default SingleRoom;