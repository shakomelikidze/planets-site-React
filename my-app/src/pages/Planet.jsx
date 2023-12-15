import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import data from '../../../data.json'
import Source from '../../assets/icon-source.svg'

function Planet() {
  const params = useParams();
  const planetData = data.find((item) => item.name.toLocaleLowerCase() == params.planet)
  const [planetImage, setPlanetImage] = useState(null);
  useEffect(() => {
    const importImage = async () => {
      try {
        const module = await import(`../../assets/planet-${params.planet.toLowerCase()}.svg`);
        setPlanetImage(module.default);
      } catch (error) {
        console.error('Error loading planet image:', error);
      }
    };

    importImage();
  }, [params.planet]);
  return (
    <>
      <section>
      {planetImage && <img className='planet-img' src={planetImage} alt={planetData.name} />}
        <div className="info-box">
          <div>
            <p className="planet-name">{planetData.name}</p>
            <p className="about">{planetData.overview.content}</p>
            <p className='source'>
              Source :  
              <p className='wikipedia-style'>
                Wikipedia
              </p>
              <img style={{width: '12px', height: '12px'}} src={Source} alt="source" />
            </p>
          </div>
          <div style={{display: 'none'}}>
            {/* Here is overview, internal and surface buttons */}
            <button className='info-type-btn'>
              01 
              <p className='ss'>Overview</p>
            </button>
            <button className='info-type-btn'>
              02 
              <p className='ss'>Internal Structure</p>
            </button>
            <button className='info-type-btn'>
              03
              <p className='ss'>Surface Geology</p>
            </button>
          </div>
        </div>
      </section>
      {/* Here is footer */}
      <footer>
        <div className="footers-info-box">
          <p className='title'>Rotation time</p>
          <p className='title-text'>{planetData.rotation}</p>
        </div>
        <div className="footers-info-box">
          <p className='title'>Revolution time</p>
          <p className='title-text'>{planetData.revolution}</p>
        </div>
        <div className="footers-info-box">
          <p className='title'>Radius</p>
          <p className='title-text'>{planetData.radius}</p>
        </div>
        <div className="footers-info-box">
          <p className='title'>Average temp.</p>
          <p className='title-text'>{planetData.temperature}</p>
        </div>
      </footer>
    </>
    
  )
}

export default Planet