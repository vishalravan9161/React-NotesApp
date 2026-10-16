import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
        <div className='flex gap-5  text-blue-700 place-content-center'>
            <Link to='/'>Home</Link>
            <Link to='/paste'>Pastes</Link>
         
        </div>
    
    </>
  )
}

export default Navbar