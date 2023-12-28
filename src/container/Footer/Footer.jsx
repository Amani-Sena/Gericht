import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contato</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;A melhor maneira de nos encontrarmos é perdermo-nos ao serviço dos outros.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
        <h1 className="app__footer-headtext">Horário de Funcionamento</h1>
        <p className="p__opensans">Segunda - Sexta:</p>
        <p className="p__opensans">10h - 22h</p>
        <p className="p__opensans">Sábado - Domingo:</p>
        <p className="p__opensans">10h - 15h</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. Todos os direitos reservados.</p>
    </div>

  </div>
);

export default Footer;
