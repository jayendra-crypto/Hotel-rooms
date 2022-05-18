import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'
function RoomsFilter({ rooms }) {
    const co = useContext(RoomContext);
    const { handleChange, sortedRooms, featuredRooms, loading, type, capacity, price, maxPrice, maxSize, minPrice, minSize, pets, breakfast } = co;


    const getUnique = (item, values) => {
        return [...new Set(item.map(item => item[values]))]
    }
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];

    types = types.map((item, index) => {
        return <option
            value={item}
            key={index}
            id={item}
        >{item}
        </option>
    })
    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">

                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type"  defaultValue={type} className="form-control" onChange={handleChange} >
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" defaultValue={capacity} className="form-control" onChange={handleChange} >
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price Rs.{price}</label>
                    <input type="range" name="price" id="price" min={minPrice} max={maxPrice} step='1000' defaultValue={price} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>     
                </div>
                <div className="form-group">               
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"  onChange={handleChange}  />
                        <label htmlFor="breakfast">breakfast</label>
                    </div> 
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets"  onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>   
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter
