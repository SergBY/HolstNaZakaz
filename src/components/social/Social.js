import React from 'react';
import './Social.css';
import Title from '../title/Title';


function Social() {
  return(
    <div className="contacts__social">
      <Title titleSize="contacts" title="Подписывайтесь на нас"/>
      <div className="contacts__social-logos">
        <a href="https://www.vk.com" target="_blank" rel="noreferrer" className="contacts__social-logo pict-vk"></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="contacts__social-logo pict-instagramm"></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="contacts__social-logo pict-facebook"></a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="contacts__social-logo pict-youtube"></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="contacts__social-logo pict-twitter"></a>
        <a href="https://ok.ru/" target="_blank" rel="noreferrer" className="contacts__social-logo pict-odnoklassniki"></a>
      </div>
    </div>
  )
}

export default Social;