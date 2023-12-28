import React from 'react';

import {images, data} from "../../constants"
import {SubHeading, MenuItem} from "../../components"

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>

    <div className='app__specialMenu-title'>
      <SubHeading title="O Cardápio que Fixa Seu Paladar." />
      <h1 className='headtext__cormorant' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">Especial do Dia</h1>
    </div>

    <div className='app__specialMenu-menu'>

      <div className='app__specialMenu-menu_wine' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <p className='app__specialMenu_menu_heading'>Vinho & Bebidas</p>
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className='app__specialMenu-menu_cocktails' data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
        <p className='app__specialMenu_menu_heading'>Drinks</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
            <button type='button' className='custom__button'>Ver Mais</button>
    </div>

  </div>
);

export default SpecialMenu;
