import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Greenhouse from "./components/Greenhouse";
import Navigation from "./components/Navigation";
import Thermometer from "./components/Thermometer";
import Hygrometer from "./components/Hygrometer";
import { useClimate } from './context/ClimateContext'


function App() {
  const { temperature, setTemperature, desiredTemp, setDesiredTemp } = useClimate();

  useEffect (() => {

    let tempChange = setTimeout( () => {
      if (temperature > desiredTemp){
        setTemperature(temperature - 1)
      } else if (temperature < desiredTemp) {
        setTemperature(temperature + 1)
      }
    }, 250)

    return () => clearInterval(tempChange)

    }, [desiredTemp, temperature])


  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/thermometer">
          <Thermometer />
        </Route>
        <Route path="/hygrometer">
          <Hygrometer />
        </Route>
        <Route path="/">
          <Greenhouse />
        </Route>
      </Switch>
    </>
  );
}

export default App;
