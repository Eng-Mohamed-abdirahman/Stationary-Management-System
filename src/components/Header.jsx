import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
        <Link to={'/Home'}>Home</Link>
      <Link to={'/About'}>About</Link>
      <Link to={'/Contact'}>Contact</Link>
    </div>
  )
}

export default Header