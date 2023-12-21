import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Burger from '../../assets/icon-hamburger.svg'

function Header() {
  const [isPlanetListVisible, setPlanetListVisible] = useState(false)
  const togglePlanetList = () => {
    setPlanetListVisible(!isPlanetListVisible)
  }
  return (
    <>
      <nav>
        <h1 className='logo'>The planets</h1>
        <div className={`planets-list ${isPlanetListVisible ? 'visible' : ''}`}>
          <Link to='mercury'>Mercury</Link>
          <Link to='venus'>Venus</Link>
          <Link to='earth'>Earth</Link>
          <Link to='mars'>Mars</Link>
          <Link to='jupiter'>Jupiter</Link>
          <Link to='saturn'>Saturn</Link>
          <Link to='uranus'>Uranus</Link>
          <Link to='neptune'>Neptune</Link>
        </div>
        <button className='burger' onClick={togglePlanetList}>
          <img src={Burger} alt="" />
        </button>
      </nav>
      <hr style={{borderColor: '#38384F'}} />
    </>
  )
}

export default Header