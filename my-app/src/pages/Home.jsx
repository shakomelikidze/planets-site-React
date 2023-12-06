import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/mercury');
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home