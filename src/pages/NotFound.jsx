import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import '@/App.scss';
import Title from '@/view/Title';
import SideMenu from '@/view/SideMenu';
import Content from '@/view/Content';
import enso from '@/assets/enso.jpg';


const NotFound = ({scrollPosition}) => (
  <div className='not-found'>
    Not Found
  </div>
)


export default NotFound;
