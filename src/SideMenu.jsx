const SideMenu = ({scrollPosition}) => {
  return (
    <div className={`side-menu ${scrollPosition <= window.innerHeight/2 ? ' ' : ' is-visible'}`}>
      <ul>
        <li><a>home</a></li>
        <li><a>introduction</a></li>
        <li><a>articles</a></li>
        <li><a>papers</a></li>
        <li><a>keywords</a></li>
        <li><a>community</a></li>
        <li><a>links</a></li>
      </ul>
      {/* <p>__PL-AP__</p> */}
    </div>
  )
}

export default SideMenu;