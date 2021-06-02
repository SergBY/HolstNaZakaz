import Title from '../title/Title';

import { WorkTime } from '../constants';

function Worktime() {
  return(
    <div className="contacts__contacts">
      <div class="contacts__worktime">
        <Title titleSize="contacts" title="График работы"/>
        <p class="contacts__text">{WorkTime}</p>
      </div>
    </div>
  )
}

export default Worktime;