import React,{useState,useEffect} from 'react'
import items from './data'
const RoomContext=React.createContext();


function RoomProvider(props) {
    const [rooms,setRooms] = useState([]);
    const [sortedRooms,setSortedRooms] = useState([]);
    const [featuredRooms,setFeaturedRooms] = useState([]);
    const [loading,setLoading]=useState(true)
    const [type,setType] = useState('all');
    const [capacity,setCapacity] = useState(1);
    const [price,setPrice] = useState(0);
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(0);
    const [minSize,setMinSize] = useState(0);
    const [maxSize,setMaxSize] = useState(0);
    const [breakfast,setBreakfast] = useState(false);
    const [pets,setPets] = useState(false);
    // const [name,setName] = useState('');

    useEffect(() => {
        let rooms=formatData(items);
        let featuredRooms=rooms.filter(room => room.featured===true);
        let maxPrice=Math.max(...rooms.map(item=>item.price))*70
        let maxSize=Math.max(...rooms.map(item=>item.size))
        setRooms(rooms);
        setFeaturedRooms(featuredRooms);
        setSortedRooms(rooms);
        setLoading(false);
        setPrice(maxPrice);
        setMaxPrice(maxPrice);
        setMaxSize(maxSize);
    },[])
    
    const formatData=((items) =>{

       let tempItems=items.map(item=>{
           let id=item.sys.id
           let images=item.fields.images.map(image =>
            image.fields.file.url);

            let room={...item.fields,images,id};
            return room;
       })
       return tempItems;
    })

    const handleChange=(e)=>{
        const target=e.target
        const names=e.target.name
        const value=target.type==='checkbox'?target.checked:target.value
        
        filterRooms(names,value)
    }
   const filterRooms=(names,value)=>{
       let tempRooms=[...rooms]
    
       if(names==='type')
       {   if(value==='all')
             { setSortedRooms(rooms)}
             else{
                let tempitems=tempRooms.filter(room=>room.type===value)
                setSortedRooms(tempitems)
             }
          
       }
       if(names==='capacity')
       {
        let tempitems=tempRooms.filter(room=>room.capacity>=value)
        
        setSortedRooms(tempitems)
       }

       if(names==='price')
       {
        let tempitems=tempRooms.filter(room=>room.price<=(value/70))
        setPrice(value)
        setSortedRooms(tempitems)
       }
       if(names==='minSize' || names==='maxSize')
       {  
           if(names==='minSize')
           {
               setMinSize(value)
           }
           else
           {
               setMaxSize(value)
           }
        let tempitems=tempRooms.filter(room=>room.size>=parseInt(minSize) && room.size<=parseInt(maxSize))
        console.log(minSize,maxSize)
        setSortedRooms(tempitems)
       }

       if(names==='breakfast')
       { 
        let tempitems=tempRooms.filter(room=>room.breakfast===value)
        setSortedRooms(tempitems)
       }

       if(names==='pets')
       {  
        let tempitems=tempRooms.filter(room=>room.pets===value)
        setSortedRooms(tempitems)
       }
       

       
   }
    return (
        <>
            <RoomContext.Provider value={{handleChange,rooms,sortedRooms,featuredRooms,loading,type,capacity,price,maxPrice,maxSize,minPrice,minSize,pets,breakfast}} >
              {props.children}
            </RoomContext.Provider>
                
        </>
    )
}


export {RoomProvider,RoomContext};
