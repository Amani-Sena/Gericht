import React from 'react';

import { SubHeading } from '../../components';
import {images} from "../../constants"

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef img" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Palavras do Chefe!"/>
      <h1 className='headtext__cormorant'>No que acreditamos</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <div className='app__chef-container_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Meu restaurante é mais do que uma experiência gastronômica, é uma jornada de sabores que celebra a autenticidade dos ingredientes.</p>
          
          </div>
          <p className='p__opensans'> Cada prato conta uma história, e cada cliente é um convidado especial a quem compartilho minha paixão pela culinária.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chefe & Fundador</p>
          <img src={images.sign} alt="sign" />
        </div>

      </div>

    </div>

  </div>
);

export default Chef;
