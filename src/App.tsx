import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Search } from './components/Search/Search';
import { PrimaryDomain } from './components/PrimaryDomain/PrimaryDomain';
import { CustomDomains } from './components/CustomDomains/CustomDomains';
import { UserManual } from './components/UserManual/UserManual';
import './App.scss';
import './index.css';

function App() {
  return (
    <div className="App">
      <div>
        <SideBar />
      </div>
      <div className="mainBlock">
        <header>
          <Header />
        </header>
        <Search />
        <p className="domains-subtitle">Custom domains management</p>
        <div className="cards">
          <PrimaryDomain />
          <UserManual />
        </div>
        <CustomDomains />
      </div>
    </div>
  );
}

export default App;
