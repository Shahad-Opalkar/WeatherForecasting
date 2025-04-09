import './App.css';
import { useEffect } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
function App() {
   
const weather = useWeather();
console.log(weather);

useEffect(()=>{weather.fetchCurrentUserLocationData() },[]);

  return (
    <div className="App">
      <h1> Weather Forecast</h1>
      <Input/> 
      <br/>
      <br/>
      <Button onClick={weather.fetchData} value="Search"/>
      <br/>
      <br/>
      <Card/>
      <br/>
      <Button value="Refresh"/>

    </div>
  );
}

export default App;
