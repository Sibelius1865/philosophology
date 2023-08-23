import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import '@/App.scss';
import Title from '@/view/Title';
import SideMenu from '@/view/SideMenu';
import Content from '@/view/Content';
import enso from '@/assets/enso.jpg';


const Background = ({scrollPosition}) => (
  <div className='background'>
    <img src={enso} style={{opacity: Math.max(0.2, (1 - scrollPosition/window.innerHeight))}} />
  </div>
)

const Theme = () => (
  <div className='plap'>
    <h2>__PL-AP__</h2>
  </div>
)

const SwitchLang = () => {
  const langsList = ['en', 'ja'];
  return (
    <div className='switch-langs'>
      {langsList.map((l, i) => <div key={i} className='langs'>{l}</div>)}
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


const Pages = () => {
  const {pages} = useParams();

  return (
    <div className="home">
      <Title />
      {pages}
    </div>
  )
}

const Introduction = () => {
  const {lang} = useParams();

  return (
    <div className="introduction">
      introduction
    </div>
  )
}

export default Introduction;
