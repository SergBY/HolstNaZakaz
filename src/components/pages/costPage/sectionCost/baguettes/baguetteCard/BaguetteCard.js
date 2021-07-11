import React from 'react';
import './BaguetteCard.css';

function BaguetteCard(props) {
 
  // const imgStyle ={
  //   // backgroundImage: 'url(' + {imgUrl} + ')',
  //   backgroundImage: 'url(' + {imgUrl} + ')',
  //   width: '130px',
  //   height: '130px'
  // }
  return (
    <div className="baguette__card">
      <div className="baguette__card--img" style={{width: '130px', height: '130px'}}>
        <img src={props.img}></img>
      </div>
      <label>
        <input type="radio" name="baguette" value="1458-02"/>
		    Выбрать
		  </label>
      <div className="baguette__card--item">
        <div className="baguette__card-article"><span>Артикул:</span> {props.article}</div>
        <p className="baguette__card--material"><span>Материал:</span> {props.material}</p>
        <p className="baguette__card--width"><span>Ширина:</span> {props.width}</p>
        <p className="baguette__card--color"><span>Цвет:</span> {props.color}</p>
        <p className="baguette__card--cost"><span>Цена:</span> {props.cost}</p>
      </div>
    </div>
  )
}

export default BaguetteCard
