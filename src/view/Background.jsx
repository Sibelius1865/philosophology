import '@/App.scss';
import enso from '@/assets/enso.jpg';


const Background = ({scrollPosition}) => (
  <div className='background'>
    {/* <img src={enso} style={{opacity: Math.max(0.2, (1 - scrollPosition/window.innerHeight))}} /> */}
    <img src={enso} />
  </div>
)

export default Background;