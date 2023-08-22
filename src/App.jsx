import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.scss';
import Title from './Title';
import Content from './Content';
import enso from './assets/enso.jpg';

const Background = ({scrollPosition}) => (
  <div className='background'>
    <img src={enso} style={{opacity: Math.max(0.2, (1 - scrollPosition/window.innerHeight))}} />
    {/* <img src={enso} /> */}
  </div>
)

const Theme = ({scrollPosition}) => (
  <div className={`plap ${scrollPosition <= window.innerHeight/2 ? ' ' : ' is-visible'}`}>
    <h2>__PL-AP__</h2>
  </div>
)

const SwitchLang = ({scrollPosition}) => {
  const langsList = ['en', 'ja'];
  return (
    <div className={`switch-langs ${scrollPosition <= window.innerHeight/2 ? ' ' : ' is-visible'}`}>
      {langsList.map(l => <div className='langs'>{l}</div>)}
    </div>
  )
}

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const PositionUp = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", PositionUp);
    PositionUp();
    return () => window.removeEventListener("scroll", PositionUp);
  }, []);
  // const {lang} = useParams();
  // console.log(lang)
  return (
    <div className="App">
      <Theme scrollPosition={scrollPosition} />
      <Title />
      <Content scrollPosition={scrollPosition} />
      <Background scrollPosition={scrollPosition} />
      <SwitchLang scrollPosition={scrollPosition} />
    </div>
  )
}

export default App;
