import React from 'react';
import Title from '../title/Title';

import { WorkTime } from '../../constants';

function Worktime() {
  return(
    <div className="contacts__contacts">
      <div className="contacts__worktime">
        <Title titleSize="contacts" title="График работы"/>
        <p className="contacts__text">{WorkTime}</p>
      </div>
    </div>
  )
}

export default Worktime;