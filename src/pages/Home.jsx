import { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import '@/App.scss';
import Title from '@/view/Title';
import PLAP from '@/view/PLAP';
import SideMenu from '@/view/SideMenu';
import Content from '@/view/Content';
import Background from '@/view/Background';


const SwitchLang = () => {
  const langsList = ['en', 'ja'];
  const navigate = useNavigate();
  const handleClick = (lang) => {
    navigate(`../home/${lang}`);
  }
  return (
    <div className='switch-langs'>
      {langsList.map((l, i) => (
        <div key={i} className='langs'>
          <div onClick={() => handleClick(l)}>{l}</div>
        </div>
      ))}
    </div>
  )
}

const FadeInContainer = ({children, scrollPosition}) => {
  return (
    <div className={`fade-in ${scrollPosition <= window.innerHeight/2 ? ' ' : ' is-visible'}`}>
      {children}
    </div>
  )
}
const FadeOutContainer = ({children, scrollPosition}) => {
  return (
    <div style={{opacity: Math.max(0.2, (1 - scrollPosition/window.innerHeight))}}>
      {children}
    </div>
  )
}


const Home = () => {
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
      <FadeInContainer scrollPosition={scrollPosition}>
        <PLAP />
        <SwitchLang />
        <SideMenu />
      </FadeInContainer>
      <FadeOutContainer scrollPosition={scrollPosition}>
        <Background scrollPosition={scrollPosition} />
      </FadeOutContainer>
      <Title />
      <Content scrollPosition={scrollPosition} />
    </div>
  )
}

export default Home;
