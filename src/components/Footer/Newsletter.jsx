import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Inscreva-se na nossa Newsletter</h1>
      <p className="p__opensans">E fique por dentro das últimas noticias!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Digite seu email" />
      <button type="button" className="custom__button">Inscrever-se</button>
    </div>
  </div>
);

export default Newsletter;
