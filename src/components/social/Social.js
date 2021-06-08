import React from 'react';
import './Social.css';
import Title from '../title/Title';


function Social() {
  return(
    <div className="contacts__social">
      <Title titleSize="contacts" title="Подписывайтесь на нас"/>
      <div className="contacts__social-logos">
        <div className="contacts__social-logo pict-vk"></div>
        <div className="contacts__social-logo pict-instagramm"></div>
        <div className="contacts__social-logo pict-facebook"></div>
        <div className="contacts__social-logo pict-youtube"></div>
        <div className="contacts__social-logo pict-twitter"></div>
        <div className="contacts__social-logo pict-odnoklassniki"></div>
      </div>
    </div>
  )
}

export default Social;