import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='Gericht Logo'/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Início</a></li>
      <li className='p__opensans'><a href="#about">Sobre</a></li>
      <li className='p__opensans'><a href="#menu">Cardápio</a></li>
      <li className='p__opensans'><a href="#awards">Premiações</a></li>
      <li className='p__opensans'><a href="#contact">Contato</a></li>
    </ul>
    <div className='app__navbar-book'>
      <button className='custom__button'>Reservar</button>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu className='menu-toggle' color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href="#home">Início</a></li>
            <li className='p__opensans'><a href="#about">Sobre</a></li>
            <li className='p__opensans'><a href="#menu">Cardápio</a></li>
            <li className='p__opensans'><a href="#awards">Premiações</a></li>
            <li className='p__opensans'><a href="#contact">Contato</a></li>
          </ul>
          <div className='app__navbar-smallscreen_book'>
           <button className='custom__button'>Reservar</button>
          </div>
        </div>
      )}
      
    </div>
  </nav>
  )};

export default Navbar;
