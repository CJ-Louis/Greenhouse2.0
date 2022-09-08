import './ClimateStats.css';
import {useClimate} from '../../context/ClimateContext'

function ClimateStats() {
  const {temperature, humidity} = useClimate()
  return (
    <>
    <>
    {temperature < 110 && temperature > 30 && (
      <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>)}
    </>
    <>
    {temperature > 110 && (
      <div className="everythings-burning">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
      <div>
        TURN DOWN THE TEMP!!!!!!
      </div>
      <button onClick={(e) => alert('You Died')}>
        911 HELP
      </button>
    </div>)}
    </>
    <>
    {temperature < 30 && (
      <div className="winter-wonderland">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
      <div>
        T-tt-ttt-too Ccc-c-ooold!!!!!!
      </div>
      <button onClick={(e) => alert('Out for Ice')}>
        Turn up the temp?
      </button>
    </div>)}
    </>
    </>


  )
}

export default ClimateStats;
