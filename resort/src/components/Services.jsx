import React, { useState } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

function Services() {
    const [services, setServices] = useState([
        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info: 'Never miss the free cocktails.Yes we offer you free cocktail'
        },
        {
            icon: <FaHiking />,
            title: "endless hiking",
            info: 'No one could stop you from exploring the nature as we offer free Hiking to you'
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: 'Enjoy the free ride upto 12kms,Absolutely free ,dont miss the deal'
        },
        {
            icon: <FaBeer />,
            title: "free beer",
            info: 'Never miss the free Beer.Yes we offer you free Beer'
        }
    ]
    );

    return (
        <section className="services">
            <Title title="sevices" />
            <div className="services-center">
                {services.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
        </div>

        </section>
    )
}

export default Services
