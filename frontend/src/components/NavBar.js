import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

    return (
        <div className='NavBar'>
          <Link to='/'>Home</Link> - <Link to='/pets'>All Pets</Link> - <Link to='/pets/new'>Add Pet</Link>
        </div>
    )

}

export default NavBar