import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Search } from './components/Search/Search';
import { PrimaryDomain } from './components/PrimaryDomain/PrimaryDomain';
import { CustomDomains } from './components/CustomDomains/CustomDomains';
import { UserManual } from './components/UserManual/UserManual';
import './App.scss';
import './index.css';
import { slide as Menu } from 'react-burger-menu';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="appSideBar">
          <SideBar />
        </div>
      </nav>
      <div className="burger">
        <Menu width={'256px'}>
          <SideBar />
        </Menu>
      </div>

      <div className="mainBlock">
        <header>
          <Header />
        </header>
        <Search />
        <main>
          <h2 className="domainsSubtitle">Custom domains management</h2>
          <div className="cards">
            <PrimaryDomain />
            <UserManual />
          </div>
          <div className="customDomainsContainer">
            <CustomDomains />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
