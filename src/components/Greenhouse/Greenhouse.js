import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import tooHot from './images/greenhouse-fire.jpg'
import tooCold from './images/greenhouse-cold.jpg'
import tooWet from './images/humid-house.jpg'
import tooDry from './images/desert-house.jpg'
import './Greenhouse.css';
import {useTheme} from '../../context/ThemeContext'
import { useClimate } from '../../context/ClimateContext';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useEffect, useState } from 'react';

function Greenhouse() {
  const {temperature, humidity} = useClimate()
  const [image, setImage] = useState(dayImage)
  const {themeName} = useTheme()

  useEffect(() => {
    if (temperature >= 110) setImage(tooHot)
    else if (temperature <= 30) setImage(tooCold)
    else if (humidity >= 80) setImage(tooWet)
    else if (humidity <= 20) setImage(tooDry)
    else themeName === 'day' ? setImage(dayImage) : setImage(nightImage)
    //
  }, [temperature, humidity, themeName])

  return (
    <section>
      <img  className='greenhouse-img'
            src={image}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
