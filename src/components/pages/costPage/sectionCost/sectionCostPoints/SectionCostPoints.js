import React, { useState} from 'react';
import Title from '../../../../title/Title';
import { HolstSizes } from '../../../../../constants';
import CostPoint from '../costPoint/CostPoint';
import FotoSizeImg from '../fotoSizeImg/FotoSizeImg';
import RadioBtn from '../../../../button/radioButton/RadioButton';
import './SectionCostPoints.css';

function SectionCostPoints() {
  const [sizeSelected, setSizeSelected] = useState('');

  return (
    <div className="cost__points">
    <div className="cost__points--point">
      <div className="cost__points--title">
        <CostPoint number={1}/>
        <Title titleSize="title-3" title="Выберите фото"/>
      </div>
      <div className="cost__points--item">
        <div className="input__wrapper">
          <input name="file" type="file" name="file" id="input__file" className="input input__file" multiple></input>
            <label htmlFor="input__file" className="btn btn--small btn--small-foto">
                <span className="input__file-button-text">Выбрать фото</span>
            </label>
        </div>
      </div>
    </div>
    <form className="cost__points--point">
      <div className="cost__points--title">
        <CostPoint number={2}/>
        <Title titleSize="title-3" title="Выберите размер (см)"/>
      </div>
      <div className="cost__points--item">
        {HolstSizes.map(link => (
          <RadioBtn btnSize="foto-size" title={link.size} key={link.id} onClick={() => setSizeSelected(link.size)}/>
        ))}
      </div>
      <FotoSizeImg fotoSize={sizeSelected}/>
    </form>
    <form className="cost__points--point">
      <div className="cost__points--title">
        <CostPoint number={3}/>
        <Title titleSize="title-3" title="Выберите материал"/>
      </div>
      <div className="cost__points--item">
        <RadioBtn btnSize="small" title="Холст льняной"/>
        <RadioBtn btnSize="small" title="Холст натуральный"/>
      </div>
    </form>
    <form className="cost__points--point">
      <div className="cost__points--title">
        <CostPoint number={4}/>
        <Title titleSize="title-3" title="Дизайн-обработка"/>
      </div>
      <div className="cost__points--item">
        <RadioBtn btnSize="small" title="Без обработки"/>
        <RadioBtn btnSize="small" title="Живопись"/>
        <RadioBtn btnSize="small" title="Дрим-арт"/>
        <RadioBtn btnSize="small" title="Фотоколлаж"/>
        <RadioBtn btnSize="small" title="Портрет маслом"/>
        <RadioBtn btnSize="small" title="Портрет в образе"/>
        <RadioBtn btnSize="small" title="Фотомазайка"/>
        <RadioBtn btnSize="small" title="Love-is"/>
      </div>
    </form>
    <form className="cost__points--point">
      <div className="cost__points--title">
        <CostPoint number={5}/>
        <Title titleSize="title-3" title="Багетные рамки"/>
      </div>
      <div className="cost__points--item">
        <RadioBtn btnSize="small" title="Добавить рамку"/>
      </div>
    </form>
  </div>
  )
}

export default SectionCostPoints;