import React from 'react';

import {images} from "../../constants"
import {SubHeading} from "../../components"

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07]

  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Galeria</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTop: '1rem'}}>Bem-vindo à galeria sensorial de nosso restaurante, onde cada prato conta uma história única e cada obra de arte culinária é uma expressão magistral de sabor e criatividade.</p>
        <button type='button' className='custom__button'>Ver Mais</button>
      </div>

      <div className='app__gallery-images' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={'gallery_image' + {index} + 1}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>

    </div>  
    
    )};

export default Gallery;
