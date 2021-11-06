import React from 'react';
import { postData } from '../service/services';

function ClockProperty(props) {

  let { city, id, onUpdate } = props
  let [hourProp, minuteProp] = props.time.split(':')

  const [hour, setHour] = React.useState(hourProp);
  const [minute, setMinute] = React.useState(minuteProp);
  const [cityUp, setCity] = React.useState(city);

  const onClickUpdate = () => {
    const itemClock = { id, city: cityUp, time: `${hour}:${minute}` }
    postData(itemClock)
    onUpdate(itemClock)
  }
  function handleChangeHour  (event)  {
    setHour(event.target.value)
  }
  function handleChangeMinute (event)  {
    setMinute(event.target.value)
  }
  function handleChangeCity   (event)  {
    setCity(event.target.value)
  }

  return (
    <>
      <input type='text' value={cityUp} onChange={handleChangeCity}></input>

      <input className={'input-number'} type='number' value={hour} onChange={handleChangeHour}></input>
      :
      <input className={'input-number'} type='number' value={minute} onChange={handleChangeMinute}></input>
      <button onClick={onClickUpdate}>Set</button>
    </>
  );
}

export default ClockProperty;
