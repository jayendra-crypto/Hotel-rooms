import React,{useContext} from 'react'
import RoomsList from './RoomsList'
import RoomsFilter from './RoomsFilter'
import Loading from './Loading'
import { RoomContext } from '../context'
function RoomsContainer() {
    const co = useContext(RoomContext);
  const {loading,sortedRooms,rooms}=co
  
  if(loading)
  {
      return <Loading/>
  }
    return (
        <div>
          
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}

export default RoomsContainer
