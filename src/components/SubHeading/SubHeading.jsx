import React from 'react';
import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}} data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="colher" className='spoon__img' />
  </div>
);

export default SubHeading;
