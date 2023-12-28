import React from 'react';

import {images} from "../../constants"

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g logo" />
    </div>

    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about' data-aos="fade-down" data-aos-delay="250" data-aos-duration="1000">
        <h1 className='headtext__cormorant'>Sobre nós</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Fundado há décadas por um chef visionário, o restaurante tornou-se um ícone culinário na cidade. Com receitas tradicionais e uma atmosfera acolhedora, o local cativa clientes com suas memórias gustativas, preservando a essência da gastronomia ao longo dos anos.</p><br /><br />
        <button className='custom__button'>Sobre Nós</button>
      </div>

      <div className='app__aboutus-content_knife flex__center' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <img src={images.knife} alt="knife img" />
      </div>

      <div className='app__aboutus-content_history' data-aos="fade-down" data-aos-delay="250" data-aos-duration="1000">
        <h1 className='headtext__cormorant'>Nossa História</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Num cantinho acolhedor da cidade, preservando receitas familiares transmitidas de geração em geração. Com um ambiente caloroso e pratos que contam a história de uma culinária autêntica,</p><br /><br />
        <button className='custom__button'>Nossa História</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
