import { Link } from 'react-router-dom';


const SideMenu = ({scrollPosition}) => {
  return (
    <div className='side-menu'>
      <ul>
        <li><Link to='home'>home</Link></li>
        <li><Link to='introduction'>introduction</Link></li>
        <li><a>articles</a></li>
        <li><a>papers</a></li>
        <li><a>keywords</a></li>
        <li><a>community</a></li>
        <li><a>links</a></li>
      </ul>
    </div>
  )
}

export default SideMenu;