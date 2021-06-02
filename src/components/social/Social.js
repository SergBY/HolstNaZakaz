import './Social.css';
import Title from '../title/Title';


function Social() {
  return(
    <div class="contacts__social">
      <Title titleSize="contacts" title="Подписывайтесь на нас"/>
      <div class="contacts__social-logos">
        <div class="contacts__social-logo pict-vk"></div>
        <div class="contacts__social-logo pict-instagramm"></div>
        <div class="contacts__social-logo pict-facebook"></div>
        <div class="contacts__social-logo pict-youtube"></div>
        <div class="contacts__social-logo pict-twitter"></div>
        <div class="contacts__social-logo pict-odnoklassniki"></div>
      </div>
    </div>
  )
}

export default Social;