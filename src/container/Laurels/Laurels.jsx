import React from 'react';

import {images, data} from "../../constants"
import {SubHeading} from "../../components"

import './Laurels.css';


const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    
    <div className='app__wrapper_info'>
      <SubHeading title="Prêmios & Reconhecimento" />
      <h1 className='headtext__cormorant' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">Nossas Premiações</h1>

      <div className='app__laurels_awards' data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>

    </div>

    <div className='app__wrapper_img' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
      <img src={images.laurels} alt="" />
    </div>

  </div>
);

export default Laurels;
