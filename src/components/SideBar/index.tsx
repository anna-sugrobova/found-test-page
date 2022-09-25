import logo from '../../assets/logo.png'; // Tell webpack this JS file uses this image

function SideBar({}) {
  return (
    <div>
      <img src={logo} alt="Site logo" />
      <p>SideBar is here</p>
    </div>
  );
}

export { SideBar };
