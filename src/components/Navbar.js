import React from 'react'
import logo from '../logo.png'
import style from '../style.css'

// Alif Rendy

const Navbar = () => {
    


  return (
    <header>
      <div className='navbar'>
        <img src={logo} alt="minerva" />
        <nav >
          <a className='a-navbar' href="/#">Home</a>
          <a href="/#">Testimoni</a>
          <a href="/#">Kontak</a>
          <a href="/#">Masuk</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar