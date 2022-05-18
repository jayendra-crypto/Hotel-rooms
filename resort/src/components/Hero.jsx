import React from 'react'
import image0 from '../images/defaultBcg.jpeg'
const Hero = ({hero,children,image}) => {
    
    return (
        <header className={hero} style={{ 
            backgroundImage: `url(${image[0]})` 
          }}>
            {children}
            
        </header>
    )
}
Hero.defaultProps={
    hero:'defaultHero',
    image:[image0]
};

export default Hero;
