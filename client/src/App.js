import React from 'react';
import logo from './logo.svg';
import ClockTime from './component/ClockTime';
import ClockProperty from './component/ClockProperty'
import { getClock } from './service/services'
import './App.css';

function App() {
  const [data, setData] = React.useState([]);
  const [isAdd, setAdd] = React.useState(false);

  React.useEffect(() => {
    getClock().then((data) => {
      setData(JSON.parse(data).res)
    });
  }, []);

  const onUpdate = (clock) => {
    const arrClock = [...data]
    const index = arrClock.findIndex(item => item.id == clock.id)

    index !== -1 ? arrClock[index] = clock : arrClock.push(clock)


    setData(arrClock)
  }
  const onNew = (clock) => {
    onUpdate(clock)
    onAdd()
  }

  function onAdd() {
    setAdd(!isAdd)
  }


  return (
    <div className="App">
      <header className="App-header">
        Enerjoy Challenge
        {data.map((item, i) => {
          return <ClockTime id={item.id} city={item.city} time={item.time} onUpdate={onUpdate} key={i}></ClockTime>
        })}
        <div>
          <button onClick={onAdd}>add new Clock</button>
          {isAdd && <ClockProperty id={Math.random()} city={''} time={''} onUpdate={onNew} />}
        </div>

      </header>
    </div>
  );
}

export default App;
