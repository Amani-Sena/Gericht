import React from 'react';

import {images} from "../../constants"
import {SubHeading} from "../../components"

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>

    <div className='app__wrapper_info' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
      <SubHeading title="Contato" />
      <h1 className='headtext__cormorant' style={{marginBottom: '1rem'}}>Nos Encontre</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '1rem 0' }}>Horário de Funcionamento</p>
        <p className='p__opensans'>Segunda - Sexta: 10h - 22h</p>
        <p className='p__opensans'>Sábado - Domingo: 10h - 15h</p>
        <button className='custom__button' style={{marginTop: '2rem'}}>Reservar</button>
      </div>
    </div>

    <div className='app__wrapper_img' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
      <img src={images.findus} alt="Find Us" />
    </div>

  </div>
);

export default FindUs;
