import React from 'react'
import {useParams} from 'react-router-dom'
import data from '../../../data.json'
// import Source from '../../assets/icon-source.svg';
import Mercury from '../../assets/planet-mercury.svg'
import Venus from '../../assets/planet-venus.svg'
import Earth from '../../assets/planet-earth.svg'
import Mars from '../../assets/planet-mars.svg'
import Jupiter from '../../assets/planet-jupiter.svg'
import Saturn from '../../assets/planet-saturn.svg'
import Uranus from '../../assets/planet-uranus.svg'
import Neptune from '../../assets/planet-neptune.svg'
import Source from '../../assets/icon-source.svg'

import * as planetImages from '../../assets';

function Planet() {
  const params = useParams();
  const planetData = data.find((item) => item.name.toLocaleLowerCase() == params.planet)
  const planetImage = planetImages[params.planet.toLowerCase()];

  return (
    <>
      <section>
      <img src={planetImage} alt={planetData.name} />
        {/* <img src={Mercury} alt="" /> */}
        <div className="info-box">
          <p className="planet-name">{planetData.name}</p>
          <p className="about">{planetData.overview.content}</p>
          <p className='source'>
            Source :  
            <p className='wikipedia-style'>
              Wikipedia
            </p>
            <img style={{width: '12px', height: '12px'}} src={Source} alt="source" />
          </p>
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