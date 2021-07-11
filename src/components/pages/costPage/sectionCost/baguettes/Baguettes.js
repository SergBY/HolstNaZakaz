import React from 'react';
import Title from '../../../../title/Title';
import './Baguettes.css';

import { Baguette } from '../../../../../constants';
import BaguetteCard from './baguetteCard/BaguetteCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Baguettes() {
  return (
    <div className="cost-baguettes">
      <Title titleSize="title-2" title="Багетные рамки"/>

      <form className="baguettes__cards--form">
        <div className="baguettes__cards">
          <Carousel selectedItem={0} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={false} centerMode={true} centerSlidePercentage={33.35}> 
          {Baguette.map(link => (
              <BaguetteCard key={link.id} img={link.img} article={link.article} material={link.material} width={link.width} color={link.color} cost={link.cost}/>
            ))}
          </Carousel>
        </div>
      </form>
    </div>
  )
}

