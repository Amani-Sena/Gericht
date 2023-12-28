import React from 'react';

import {images} from '../../constants'

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Escolha seu sabor!" />
      <h1 className='app__header-h1' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">A Chave Para uma Boa Refeição!</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>Descubra uma experiência gastronômica excepcional em nosso restaurante no coração da cidade. Com um ambiente sofisticado, chefs renomados e uma carta de vinhos selecionada, cada visita se transforma em uma celebração única.</p>
      <button className='custom__button'>Ver Cardápio</button>
    </div>
    <div className='app__wrapper_img' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
      <img src={images.welcome} alt="Imagem de boas vindas!" />
    </div>
  </div>
);

export default Header;
