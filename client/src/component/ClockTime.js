import ClockProperty from './ClockProperty'
import '../App.css';
import React from 'react';

function ClockTime(props) {
  const [isUpdate, setUpdate] = React.useState(false);

  let { city, time, id, onUpdate } = props
  const [hourProp, minuteProp] = props.time.split(':')

  const openUpdate = () => {
    setUpdate(!isUpdate)
  }

  const insertUpdate = (itemClock) => {
    onUpdate(itemClock)
    setUpdate(!isUpdate)
  }

  return (
    <>
      <div className={'container'}>
        <div className={'clock'}>
          <div className={'clock-internal'}>
            <hr className={'hand-hour'} style={{ transform: `rotate(${hourProp * 30-90}deg` }} />
            <hr className={'hand-mentis'} style={{ transform: `rotate(${minuteProp * 6-90}deg` }} />
            <div />
          </div>
        </div >
        <div>
          {city} {time}
        </div>
      </div>
      <div>
        <button onClick={openUpdate}>update</button>
        {isUpdate && <ClockProperty id={id} city={city} time={time} onUpdate={insertUpdate} />}
      </div>
    </>
  );
}

export default ClockTime;
