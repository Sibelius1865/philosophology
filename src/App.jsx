import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import '@/App.scss';
import Home from '@/pages/Home';
import Introduction from '@/pages/Introduction';


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

  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='introduction' element={<Introduction />}></Route>
      </Routes>
    </div>
  )
}

export default App;
