import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.scss';
import Title from './Title';
import Content from './Content';

const App = () => {
  // const {lang} = useParams();
  // console.log(lang)
  return (
    <div className="App">
      <Title />
      <Content />
      {/* <SwitchLang /> */}
    </div>
  )
}

export default App;
