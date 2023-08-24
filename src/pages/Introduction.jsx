import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import '@/App.scss';
import Header from '@/view/Header';
import PLAP from '@/view/PLAP';
import SideMenu from '@/view/SideMenu';
import Content from '@/view/Content';
import Background from '@/view/Background';


const SwitchLang = () => {
  const langsList = ['en', 'ja'];
  return (
    <div className='switch-langs'>
      {langsList.map((l, i) => <div key={i} className='langs'>{l}</div>)}
    </div>
  )
}


const Introduction = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const PositionUp = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", PositionUp);
    PositionUp();
    return () => window.removeEventListener("scroll", PositionUp);
  }, []);
  
  return (
    <div className="home">
      <Header />
      <PLAP />
      <SwitchLang />
      <SideMenu />
      <Content scrollPosition={scrollPosition} />
      <Background scrollPosition={scrollPosition} />
    </div>
  )
}

export default Introduction;
