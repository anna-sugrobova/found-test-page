import logo from '../../assets/logo.png';
import './styles.scss';

function SideBar() {
  return (
    <div className="side-bar">
      <img src={logo} alt="Site logo" />
    </div>
  );
}

export { SideBar };